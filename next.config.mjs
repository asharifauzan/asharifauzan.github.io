import { withPayload } from "@payloadcms/next/withPayload";
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  /* config options here */
  output: "standalone"
};

export default withPayload(nextConfig);
