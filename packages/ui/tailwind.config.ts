import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [require("nativewind/preset"), require("../../tailwind.config")],
  plugins: [],
};
export default config;
