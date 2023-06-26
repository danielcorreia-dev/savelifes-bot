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
      keyframes: {
        blink: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
          type: {
            '0%': { width: '0ch' },
            '5%, 10%': { width: '1ch' },
            '15%, 20%': { width: '2ch' },
            '25%, 30%': { width: '3ch' },
            '35%, 40%': { width: '4ch' },
            '45%, 50%': { width: '5ch' },
            '55%, 60%': { width: '6ch' },
            '65%, 70%': { width: '7ch' },
            '75%, 80%': { width: '8ch' },
            '85%, 90%': { width: '9ch' },
            '95%': { width: '10ch' },
          },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
    },
    plugins: [],
  },
};
