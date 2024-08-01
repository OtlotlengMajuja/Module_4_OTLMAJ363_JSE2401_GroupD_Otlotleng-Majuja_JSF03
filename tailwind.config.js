/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.(vue,js,ts,jsx,tsx)"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fcfcfc',
          dark: '#121425',
          medium: '#4f2c2c',
          accent1: '#8c4433',
          accent2: '#c95c3b',
        },
      },
    },
  },
  plugins: [],
}

