/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#191b2e',
        primary: '#181a2d',
        secondary: '#343545',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 1 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 1 },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
