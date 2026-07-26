import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [new URL("https://dummyimage.com/**")],
    qualities: [100, 75],
  },
  allowedDevOrigins: ["192.168.0.157", "192.168.15.72"],
};

export default nextConfig;
