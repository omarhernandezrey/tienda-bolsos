// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir esta línea
    './components/**/*.{js,ts,jsx,tsx}', // Y esta también
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
