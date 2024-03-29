/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.transform-scale-0': {
          transform: 'translate(-50%, -50%) scale(0)',
          transition: '0.4s',
        },
        '.transform-scale-1': {
          transform: 'translate(-50%, -50%) scale(1)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

