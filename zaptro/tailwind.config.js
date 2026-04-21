/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2',
        secondary: '#dc004e',
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  plugins: [],
}
