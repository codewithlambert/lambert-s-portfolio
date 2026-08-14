import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#000000',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a0a0a0',
          tertiary: '#707070',
        },
        accent: {
          subtle: '#1a1a1a',
        },
        glow: {
          hover: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        h1: ['4rem', { lineHeight: '1.2' }],      // 64px
        h2: ['2.5rem', { lineHeight: '1.2' }],    // 40px
        h3: ['1.5rem', { lineHeight: '1.2' }],    // 24px
        body: ['1rem', { lineHeight: '1.5' }],    // 16px
        small: ['0.875rem', { lineHeight: '1.5' }], // 14px
      },
      spacing: {
        xs: '0.5rem',   // 8px
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem',     // 32px
        xl: '3rem',     // 48px
        xxl: '4rem',    // 64px
        xxxl: '6rem',   // 96px
      },
      boxShadow: {
        hover: '0 0 20px rgba(255, 255, 255, 0.1)',
      },
      transitionDuration: {
        fast: '200ms',
        medium: '400ms',
        slow: '600ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
