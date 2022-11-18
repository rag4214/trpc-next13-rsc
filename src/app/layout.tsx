import { type LayoutComponent } from "next13/layout";
import { TRPCProvider } from "client/tRPC/TRPCProvider";

import "./globals.css";

const RootLayout: LayoutComponent = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <TRPCProvider>
          <main>{children}</main>
        </TRPCProvider>
      </body>
    </html>
  );
};
export default RootLayout;
