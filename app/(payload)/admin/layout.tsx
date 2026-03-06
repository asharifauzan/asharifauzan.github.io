import { type PropsWithChildren } from "react";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import config from "@payload-config";
import { importMap } from "./importMap";
import type { ServerFunctionClient } from "payload";
import "@payloadcms/next/css";

const serverFunction: ServerFunctionClient = async (args) => {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <RootLayout
      serverFunction={serverFunction}
      config={config}
      importMap={importMap}
    >
      {children}
    </RootLayout>
  );
}
