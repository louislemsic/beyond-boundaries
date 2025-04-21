import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
    path: ""
  },
  // output: "export",
  // basePath: "/iteration2",
  // assetPrefix: "/iteration2",
};
/** DO NOT TOUCH */
const withSerwist = withSerwistInit({
  swSrc: "src/sw.ts",
  swDest: "public/sw.js",
});

export default withSerwist(nextConfig);