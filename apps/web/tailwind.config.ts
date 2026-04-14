import type { Config } from "tailwindcss";
import baseConfig from "@monorepo/ui/tailwind.config";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../packages/ui/src/**/*.{ts,tsx,js,jsx}",
  ],
  presets: [baseConfig],
  plugins: [],
};

export default config;
