import { appRouter } from "./routers/_app";
import { createRSCContext } from "./rscContext";

export const createTRPCRSC = async () => appRouter.createCaller(await createRSCContext());
