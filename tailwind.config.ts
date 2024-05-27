import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            screens: {
                lgxl: "2000px",
                lg2xl: "2500px",
                lg3xl: "3000px",
                lg1000: "1000px",
                lg1450: "1450px",
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                gray: {
                    "100": "#141414",
                    "200": "#0a0f20",
                    "300": "#101010",
                    "400": "#0a1015",
                    "500": "#0d0d0d",
                    "600": "#070707",
                    "700": "rgba(0, 0, 0, 0.1)",
                    "800": "rgba(255, 255, 255, 0.1)",
                    "900": "rgba(0, 0, 0, 0.25)",
                    "1000": "rgba(255, 255, 255, 0.8)",
                    "1100": "rgba(255, 255, 255, 0.72)",
                    "1200": "rgba(255, 255, 255, 0.24)",
                    "1300": "rgba(255, 255, 255, 0.32)",
                },
                cornflowerblue: {
                    "100": "#aab8ff",
                    "200": "#9aaaff",
                    "300": "#94a5ff",
                    "400": "#698ff0",
                    "500": "#6e80db",
                    "600": "#6173cc",
                },
                darkslategray: {
                    "100": "#474747",
                    "200": "#404040",
                    "300": "#333",
                    "400": "rgba(51, 51, 51, 0.1)",
                    "500": "rgba(51, 51, 51, 0.09)",
                },
                whitesmoke: "#eaecf0",
                darkslateblue: {
                    "100": "#4658b6",
                    "200": "#143d8d",
                    "300": "#273373",
                },
                mediumslateblue: "#696ef0",
                lightskyblue: "#adbfff",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
