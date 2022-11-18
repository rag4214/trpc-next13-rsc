import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import { z } from "zod";

import {
  apiProcedure,
  isAPICtx,
  isRSCCtx,
  procedure,
  router,
  rscProcedure,
} from "../tRPC";

export type AppRouter = typeof appRouter;
export type AppRouterInputs = inferRouterInputs<AppRouter>;
export type AppRouterOutputs = inferRouterOutputs<AppRouter>;

export const appRouter = router({
  hello: procedure
    .input(
      z
        .object({
          text: z.string().optional(),
        })
        .optional()
    )
    .query(({ ctx, input }) => {
      return {
        greeting: `Hello${isAPICtx(ctx) ? " from API" : isRSCCtx(ctx) ? " from RSC" : ""}, ${input?.text ?? "tRPC"}!`,
      };
    }),

  helloAPI: apiProcedure
    .input(
      z
        .object({
          text: z.string().optional(),
        })
        .optional()
    )
    .query(({ input }) => {
      return {
        greeting: `Hello from API-only procedure, ${input?.text ?? "tRPC"}!`,
      };
    }),

  helloRSC: rscProcedure
    .input(
      z
        .object({
          text: z.string().optional(),
        })
        .optional()
    )
    .query(({ input }) => {
      return {
        greeting: `Hello from RSC-only procedure, ${input?.text ?? "tRPC"}!`,
      };
    }),
});
