import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5ED",
        ink: "#1A1916",
        muted: "#5C5850",
        line: "#E4DFD2",
        coral: "#FC7557",
        gold: "#C89612",
        violet: "#5C64E6",
        green: "#2F8A4E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
