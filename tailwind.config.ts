import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#E9204F",
        black: "#101010",
        body: "#747474",
        "off-white": "#FAFAFA",
        "light-gray": "#F3F3F3",
        "dark-text": "#ACACAC",
        brand: {
          red: "#E9204F",             // Primary Brand Red / Accent / Hover
          primary: "#E9204F",
          black: "#101010",           // Headings, dark full-bleed sections, links
          charcoal: "#101010",        // Headings & strong text
          slate: "#747474",           // Body gray copy
          muted: "#ACACAC",           // Body text on dark backgrounds
          subtle: "#FAFAFA",          // Hero wrapper & subtle borders
          light: "#F3F3F3",           // Service box background
          // Backward-compatible mappings:
          blue: "#E9204F",
          teal: "#101010",
          darkteal: "#101010",
          seafoam: "#E9204F",
        },
      },
      transitionTimingFunction: {
        "agency-bezier": "cubic-bezier(0.17, 0.67, 0, 1.01)",
      },
      transitionDuration: {
        "700": "700ms",
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "28px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        glass: "0 24px 50px -12px rgba(28, 56, 102, 0.08), inset 0 1px 1px #FFFFFF",
        "nav-glass": "0 4px 20px rgba(0, 0, 0, 0.03)",
        "pill-blue": "0 8px 20px -4px rgba(37, 99, 235, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
