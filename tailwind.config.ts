import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#21343E",
        secondary: "#DFD8CF",
      },
      fontFamily: {
        apercu: ["var(--font-apercu)", "monospace"],
        canela: ["var(--font-canela)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
