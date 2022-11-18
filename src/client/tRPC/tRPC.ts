"use client";

import { createTRPCReact } from "@trpc/react-query";

import { type AppRouter } from "server/tRPC/routers/_app";

export const tRPC = createTRPCReact<AppRouter>();
