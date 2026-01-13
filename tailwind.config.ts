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
                primary: {
                    50: '#f0f9fa',
                    100: '#d7eff2',
                    200: '#b2deebd',
                    300: '#7ec4d0',
                    400: '#46a3b5',
                    500: '#28879b',
                    600: '#226d81',
                    700: '#205869', // Deep Teal / Petrol
                    800: '#204957',
                    900: '#1d3d49',
                    950: '#0e2731',
                },
                neutral: {
                    50: '#f8f9fa', // Lightest gray/white
                    100: '#f1f3f5',
                    200: '#e9ecef',
                    300: '#dee2e6', // Silver
                    400: '#ced4da',
                    500: '#adb5bd', // Lead
                    600: '#868e96',
                    700: '#495057', // Graphite
                    800: '#343a40', // Dark Graphite
                    900: '#212529', // Black
                    950: '#0b0c0e',
                }
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                'lg': '16px',
                'md': '12px',
                'sm': '8px',
            }
        },
    },
    plugins: [],
} satisfies Config;
