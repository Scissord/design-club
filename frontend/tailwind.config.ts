import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B968C7',
        'rainy': '#A6ADBB', 
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  darkMode: "class",
}

export default config;