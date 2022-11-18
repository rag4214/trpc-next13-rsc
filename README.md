# tRPC v10 - Next.js 13 - RSC

### Client

`createTRPCNext` no longer works with the `app/` directory, so the [react method](https://trpc.io/docs/react) was used to creact a client component provider and wrap the application in `app/layout.tsx`

`src/client/tRPC/tRPC.ts` -> `createTRPCReact` utils

`src/client/tRPC/TRPCProvider.tsx` -> tRPC & React-Query provider

### Server

`src/server/tRPC/apiContext.ts` -> Passes `req` and `res` from api routes to context

`src/server/tRPC/rscContext.ts` -> Passes `headers()` and `cookies()` from `next/headers` to context

`src/server/tRPC/rsc.ts` -> `createTRPCRSC` util

`src/server/tRPC/tRPC.ts` -> `t` utils & middleware for handling api / rsc only procedures

Examples of using `procedure` / `apiProcedure` / `rscProcedure` can be found in `src/server/tRPC/routers/_app.ts`

### Navigation

Home page has two links, one to `/client` which uses React-Query, and one to `/server` which uses RSC

## Installation

```
npm install
```

## Dev

```
npm run dev
```
