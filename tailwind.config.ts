import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFCF5",
        "primary-green": "#5BA874",
        "dark-text": "#3C2A21",
        "accent-pink": "#F48FB1",
        "sticky-blue": "#CCE0FF",
        "sticky-yellow": "#FFF59D",
        "sticky-green": "#C8E6C9",
        "sticky-pink": "#F8BBD0",
        "text-brown": "#674305",
        "card1-bg": "#F7F5FF",
        "card2-bg": "#FFF0F3",
        "card3-bg": "#EBF6FF",
      },
      fontFamily: {
        shantell: ["var(--font-shantell)", "cursive"],
        murecho: ["var(--font-murecho)", "sans-serif"],
        sunday: ["var(--font-sunday)", "serif"],
        bagel: ["var(--font-bagel)", "cursive"],
        mynerve: ["var(--font-mynerve)", "cursive"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      keyframes: {
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
      animation: {
        'breathe': 'breathe 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
