import { generatePageMetadata, RootPage } from "@payloadcms/next/views";
import config from "@payload-config";
import { importMap } from "../importMap";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
}

export const generateMetadata = (props: Props): Promise<Metadata> =>
  generatePageMetadata({ config, ...props });

export default async function PayloadPage(props: Props) {
  return RootPage({ config, ...props, importMap });
}
