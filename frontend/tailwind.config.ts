import { Config } from 'tailwindcss';
import daysyui from 'daisyui';

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
        'column': '#f8f8f8',
        'card': '#ffffff',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [daysyui],
  darkMode: "class",
}

export default config;