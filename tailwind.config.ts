import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,astro}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
          tertiary: "var(--surface-tertiary)",
        },
        text: {
          heading: "var(--text-heading)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
        brand: {
          surface: "var(--brand-surface)",
          hover: "var(--brand-hover)",
          disabled: "var(--brand-disabled)",
          accent: "var(--brand-accent)",
          text: "var(--brand-text)",
          "text-disabled": "var(--brand-text-disabled)",
          "text-accent": "var(--brand-text-accent)",
        },
        pink: {
          surface: "var(--pink-surface)",
          hover: "var(--pink-hover)",
          disabled: "var(--pink-disabled)",
          accent: "var(--pink-accent)",
          text: "var(--pink-text)",
          "text-disabled": "var(--pink-text-disabled)",
          "text-accent": "var(--pink-text-accent)",
        },
        blue: {
          surface: "var(--blue-surface)",
          hover: "var(--blue-hover)",
          disabled: "var(--blue-disabled)",
          accent: "var(--blue-accent)",
          text: "var(--blue-text)",
          "text-disabled": "var(--blue-text-disabled)",
          "text-accent": "var(--blue-text-accent)",
        },
        green: {
          surface: "var(--green-surface)",
          hover: "var(--green-hover)",
          disabled: "var(--green-disabled)",
          accent: "var(--green-accent)",
          text: "var(--green-text)",
          "text-disabled": "var(--green-text-disabled)",
          "text-accent": "var(--green-text-accent)",
        },
      },
      fontFamily: {
        display: ["ClashDisplay-Semibold", ...fontFamily.sans],
        body: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      spacing: {
        "0": "0rem",
        "3xs": "0.25rem",
        "2xs": "0.5rem",
        xs: "0.75rem",
        "3sm": "1rem",
        "2sm": "1.5rem",
        sm: "2rem",
        "4md": "3rem",
        "3md": "4rem",
        "2md": "4.5rem",
        md: "6rem",
        "4lg": "7rem",
        "3lg": "8rem",
        "2lg": "10rem",
        lg: "12rem",
        "6xl": "16rem",
        "5xl": "20rem",
        "4xl": "24rem",
        "3xl": "32rem",
        "2xl": "40rem",
        xl: "48rem",
      },
      borderWidth: {
        1: "0.063rem",
      },
    },
    spacing: {},
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export default config;
