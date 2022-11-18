import Link from "next/link";

import { type PageComponent } from "next13/page";

const Page: PageComponent = async () => {
  return (
    <>
      <Link href="/client" style={{ display: "block" }}>
        (Client) React-Query tRPC
      </Link>
      <Link href="/server" style={{ display: "block" }}>
        (Server) RSC tRPC
      </Link>
    </>
  );
};
export default Page;
