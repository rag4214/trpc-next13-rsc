import { type PageComponent } from "next13/page";

import { createTRPCRSC } from "server/tRPC/rsc";

const Page: PageComponent = async () => {
  const tRPC = await createTRPCRSC();
  const hello = await tRPC.hello();

  return (
    <div>
      <p>{hello.greeting}</p>
    </div>
  );
};
export default Page;
