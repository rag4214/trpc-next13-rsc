import { type inferAsyncReturnType } from "@trpc/server";
import { cookies, headers } from "next/headers";

export type RSCContext = inferAsyncReturnType<typeof createRSCContext>;

export const createRSCContext = async () => ({
  headers: headers(),
  cookies: cookies(),
});
