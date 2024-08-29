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
        bebasneue: ['BebasNeue'],
        typewriter: ['TypeWriter'],
        helvetica: ['Helvetica'],
        palatino: ['Palatino']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'palette-red': '#e63946',
        'palette-very-light-blue': '#f1faee',
        'palette-light-blue': '#a8dadc',
        'palette-ocean-blue': '#457b9d',
        'palette-dark-blue': '#1d3557',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
export default config;
