import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";

import { type APIContext } from "./apiContext";
import { type RSCContext } from "./rscContext";

type Context = APIContext | RSCContext;

export const isAPICtx = (ctx: Context): ctx is APIContext =>
  "req" in ctx && "res" in ctx;

export const isRSCCtx = (ctx: Context): ctx is RSCContext =>
  "headers" in ctx && "cookies" in ctx;

const t = initTRPC.context<Context>().create({ transformer: superjson });

const isAPI = t.middleware(({ ctx, next }) => {
  if (!isAPICtx(ctx))
    throw new TRPCError({
      code: "METHOD_NOT_SUPPORTED",
      message: "Procedure May Only Be Called Client-Side",
    });

  return next({ ctx });
});

const isRSC = t.middleware(({ ctx, next }) => {
  if (!isRSCCtx(ctx))
    throw new TRPCError({
      code: "METHOD_NOT_SUPPORTED",
      message: "Procedure May Only Be Called Server-Side",
    });

  return next({ ctx });
});

export const mergeRouters = t.mergeRouters;
export const middleware = t.middleware;
export const router = t.router;

export const procedure = t.procedure;
export const apiProcedure = procedure.use(isAPI);
export const rscProcedure = procedure.use(isRSC);
