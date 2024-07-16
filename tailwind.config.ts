import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      keyframes: {
        spin: { '50%': { transform: 'rotate(360deg)' }, }
      },
      animation: {
        'spin-slow': 'spin 300ms ease-out',
      },
      "fontSize": {
        "body-base": "14px",
        "body-lg": "16px",
        "heading-xs": "14px",
        "heading-base": "14px",
        "heading-lg": "16px",
        "headline-md": "20px",
        "headline-lg": "24px",
      },
      screens: {
        'mobile-sm': '320px',
        'mobile-md': '360px',
        'tablet': '640px',
        'desktop-sm': '1024px',
        'desktop-md': '1280px',
        'desktop-lg': '1440px',
      },
      "colors": {
        "transparent": "transparent",
        "current": "currentColor",
        "white": "#FFFFFF",
        "red": "#F4F4F4",
        "navy": "#133F5D",
        "black": "#133F5D",
        "tertiary": "#C2CDD5",
        "green": {
          "10": "#C4E1A2",
          "25": "#ABD57B",
          "50": "#93C854",
          "75": "#F7AF80",
          "100": "#EF6000",
        },
        'apricot': {
          '10': '#FFBD85',
          '25': '#FFA04F',
          '50': '#F58220',
          '100': '#C2441E',
        },
        'blue': {
          '10': '#A8C5FF',
          '25': '#7EA8FB',
          '50': '#4E4E4E',
          '100': '#043B72',
        },
        'grey': {
          '10': '#C6C9CC',
          '25': '#787A7B',
          '50': '#4E4E4E',
          '100': '#19191A',
        }
      },

    },
  },
  plugins: [],
}
export default config
