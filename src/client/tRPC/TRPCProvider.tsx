"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import superjson from "superjson";

import { tRPC } from "./tRPC";

export type TRPCProviderProps = {
  children: React.ReactNode;
};
export const TRPCProvider = ({ children }: TRPCProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [tRPCClient] = useState(() =>
    tRPC.createClient({
      links: [httpBatchLink({ url: "/api/trpc" })],
      transformer: superjson,
    })
  );

  return (
    <tRPC.Provider abortOnUnmount client={tRPCClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </tRPC.Provider>
  );
};
