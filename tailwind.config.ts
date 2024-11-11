import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "hsl-186-100-69": "hsl(186 100% 69%)",
        "dark-mode": "black",
        "font-col": "gray",
        "heading-col": "white",
        buttoncolor: "rgba(64, 243, 124, 0.911)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        "inset-0-0-0.5-hsl-186-100-69":
          "inset 0px 0px 0.5em 0px hsl(186 100% 69%)",
        "0-0-0.5-hsl-186-100-69": "0px 0px 0.5em 0px hsl(186 100% 69%)",
      },
      keyframes: {
        "faulty-flicker": {
          "0%, 2%, 21%, 23%, 83%": {
            opacity: "0.1",
          },
          "4%, 19%, 80%": {
            opacity: "0.5",
          },
          "70%, 100%": {
            opacity: "0.9",
          },
        },
        "border-flicker": {
          "0%, 4%, 70%": {
            opacity: "0.1",
          },
          "2%, 8%, 100%": {
            opacity: "1",
          },
          "4%, 70%": {
            opacity: "0.7",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        "faulty-flicker": "faulty-flicker 2s linear infinite",
        "border-flicker": "border-flicker 2s linear infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
