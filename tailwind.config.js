/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'secondary-yellow': '#FFB800',
        'space-purple': {
          100: '#c1c6f2',
          300: '#8d98f9',
          400: '#5d61ec',
          900: '#2f3144',
        },
        'space-gray': {
          light: {
            100: '#DADEFF',
            200: '#C8CDFF',
            500: '#686a82',
          },
          dark: {
            100: '#c1c3cf',
            300: '#6a6b76',
            500: '#252735',
            700: '#23232c',
            800: '#1D1E26',
          },
        },
      },
    },
    plugins: [],
  },
};
