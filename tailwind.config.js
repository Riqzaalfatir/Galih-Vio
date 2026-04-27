/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['var(--font-lora)'],
        century: ['Century', 'serif'],
        creators: ['Creators', 'sans-serif'],
        noto: ['var(--font-noto-sans)'],
        ibm: ['var(--font-ibm)'],
  wavy: ['CreatorsWavy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}