"use client";

import { type PageComponent } from "next13/page";

import { tRPC } from "client/tRPC/tRPC";

const Page: PageComponent = () => {
  const hello = tRPC.hello.useQuery();

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
};
export default Page;
