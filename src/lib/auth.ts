import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { getServers, setServers, promises as dns } from "dns";


const RESOLVER_LISTS = [
    ["1.1.1.1", "8.8.8.8"],
    ["8.8.8.8", "1.1.1.1"],
    ["1.1.1.1", "8.8.8.8", "8.8.4.4"],
];

let nextResolverList = 0;

function isLoopbackResolver(server: string) {
    return (
        server === "localhost" ||
        server.startsWith("127.") ||
        server.startsWith("::1") ||
        server.startsWith("0.0.0.0")
    );
}

function rotateResolvers() {
    const current = getServers().map((s) => s.trim()).join(",");
    for (let i = 0; i < RESOLVER_LISTS.length; i++) {
        const list =
            RESOLVER_LISTS[(nextResolverList + i) % RESOLVER_LISTS.length]!;
        if (list.join(",") !== current) {
            setServers(list);
            nextResolverList = (nextResolverList + i + 1) % RESOLVER_LISTS.length;
            return;
        }
    }
}

if (getServers().some(isLoopbackResolver)) {
    rotateResolvers();
}


let lastProbeAt = Number.NEGATIVE_INFINITY;
const PROBE_INTERVAL_MS = 15_000;

export async function ensureHealthyDns(): Promise<void> {
    const now = performance.now();
    if (now - lastProbeAt < PROBE_INTERVAL_MS) return;
    lastProbeAt = now;

    try {
        await dns.resolve("example.com", "A");
    } catch {
        rotateResolvers();
        try {
            await dns.resolve("example.com", "A");
        } catch {
            // Truly offline — leave it; the Mongo connect will surface its own
            // error instead of us throwing a confusing DNS one here.
        }
    }
}

const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017/hireloop", {
    serverSelectionTimeoutMS: 2000,
    connectTimeoutMS: 2000,
});
const db = client.db("hireloop");

export const auth = betterAuth({
    baseURL: "http://localhost:3000",
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    database: mongodbAdapter(db, {
        client,
    }),
});
