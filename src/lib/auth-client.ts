import { createAuthClient } from "better-auth/react";

/**
 * The single better-auth client used by every form in the app.
 * When no `baseURL` is passed it calls the server it is served from
 * (http://localhost:3000 in development), so no config is needed here.
 */
export const authClient = createAuthClient();
