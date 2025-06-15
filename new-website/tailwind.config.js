/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'constellation-line': 'constellation-line 6s ease-in-out infinite',
        'scroll-right': 'scroll-right 30s linear infinite',
        'scroll-left': 'scroll-left 25s linear infinite',
        'scroll-right-slow': 'scroll-right 35s linear infinite',
      }
    },
  },
  plugins: [],
}