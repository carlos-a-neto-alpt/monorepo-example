import type { NextConfig } from "next";
import { withExpo } from "@expo/next-adapter";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "nativewind",
    "react-native-css-interop",
  ],
  //turbopack: {
  //root: "../..",
  //resolveAlias: {
  //"react-native": "react-native-web",
  //},
  //resolveExtensions: [
  //".web.ts",
  //".web.tsx",
  //".web.js",
  //".web.jsx",
  //".web.css",
  //".mdx",
  //".tsx",
  //".ts",
  //".jsx",
  //".js",
  //".mjs",
  //".json",
  //],
  //},
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      extensions: [
        ".web.tsx",
        ".web.ts",
        ".web.jsx",
        ".web.js",
        ...config.resolve.extensions,
      ],
    };
    return config;
  },
};

export default withExpo(nextConfig);
