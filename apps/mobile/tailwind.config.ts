import type { Config } from "tailwindcss";
import nativewindPreset from "nativewind/preset";
import baseConfig from "../../tailwind.config";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../packages/ui/src/**/*.{ts,tsx,js,jsx}",
  ],
  presets: [nativewindPreset, baseConfig],
  plugins: [],
};

export default config;
