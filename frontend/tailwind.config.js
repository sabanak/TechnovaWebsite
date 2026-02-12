
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0C2340',
        secondary: '#f59e0b',
        'yankees': {
          50: '#f0f4ff',
          500: '#0C2340',    // Yankees Blue
          600: '#0a1d34',
        }
      }
    },
  },
  plugins: [],
}
