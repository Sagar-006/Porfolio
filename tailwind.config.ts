import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanken: ["var(--font-hanken-grotesk)"],
        geistSans: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
