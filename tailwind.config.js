/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        sentient: ['Sentient', 'sans-serif'],
        centauri: ['Centauri', 'sans-serif'],
        lakes: ['Lakes', 'sans-serif'], 
      },
      boxShadow: {
        glow: '0 0 8px 2px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}