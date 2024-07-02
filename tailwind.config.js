/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{ts,js,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-900': '#0f0c29',
        'purple-900': '#302b63',
        'black': '#24243e',
      },
    },
  },
  plugins: [],
}

