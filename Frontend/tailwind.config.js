/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#322d25',
        secundary: '#f2f2f2',
        ter: '#fed29f',
        cuar: '#ccae91',
        lin: '#fbeec0',
        b: '#f2e6d8',
        form: "#f9f0e8",
        sen: "#eacbac"
      },
      fontFamily: {
        ti: ['Noto Sans', 'sans-serif'] ,
        pa: ['Quicksand', 'sans-serif']
      },
    },
  },
  plugins: [],
}
