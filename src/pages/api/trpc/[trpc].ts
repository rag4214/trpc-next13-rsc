import { createNextApiHandler } from "@trpc/server/adapters/next";

import { createAPIContext } from "server/tRPC/apiContext";
import { appRouter } from "server/tRPC/routers/_app";

export default createNextApiHandler({
  router: appRouter,
  createContext: createAPIContext,
});
