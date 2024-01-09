import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      light: {
        100: 'var(--clr-white-100)',
      },
      dark: {
        700: 'var(--cls-black-700)',
      },
    },
  },
};
export default config;
