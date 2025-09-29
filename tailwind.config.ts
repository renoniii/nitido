import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "2rem",
                lg: "4rem",
                xl: "6rem",
                "2xl": "10rem",
            },
        },
        fontFamily: {
            sans: ["var(--font-inter)", "sans-serif"],
        },
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px",
            xl: "1440px",
            "2xl": "1920px",
        },
        extend: {
            colors: {
                magenta: "#F24068",
                magentadark: "#8F163D",
                base: "rgb(var(--color-text-base) / <alpha-value>)",
                muted: "rgb(var(--color-text-muted) / var(--color-text-muted-alpha, 1))",
            },
            animation: {
                "ping-large": "ping-large 1s ease-in-out infinite",
            },
            keyframes: {
                "ping-large": {
                    "75%, 100%": {
                        transform: "scale(3)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
