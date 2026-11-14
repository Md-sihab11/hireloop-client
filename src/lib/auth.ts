import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { getServers, setServers } from "dns";

// Some Windows setups hand Node a DNS resolver pointing at 127.0.0.1, where
// nothing is listening. The `mongodb+srv` lookup then fails with ECONNREFUSED
// and every signup 500s. If that happens, fall back to public resolvers.
// On a healthy machine this block does nothing.
if (getServers().every((server) => server.startsWith("127."))) {
    setServers(["1.1.1.1", "8.8.8.8"]);
}

const client = new MongoClient(process.env.MONGODB_URI!);
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
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
    database: mongodbAdapter(db, {
        client,
    }),
});