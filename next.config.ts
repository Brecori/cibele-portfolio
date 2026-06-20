import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [new URL("https://dummyimage.com/**")],
  },
  allowedDevOrigins: ["192.168.0.157"],
};

export default nextConfig;
