import { auth, ensureHealthyDns } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);

// Repair the machine's DNS resolver (if it is wedged at localhost) before any
// MongoDB lookup runs — see ensureHealthyDns() in src/lib/auth.ts.
export const POST = async (req: Request) => {
  await ensureHealthyDns();
  return handler.POST(req);
};

export const GET = async (req: Request) => {
  await ensureHealthyDns();
  return handler.GET(req);
};
