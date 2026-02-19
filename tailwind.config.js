/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#060606',
          card: '#0d0d0d',
          border: '#1a1a1a',
          surface: '#111111',
        },
        grey: {
          100: '#e8e8e8',
          200: '#c8c8c8',
          300: '#a8a8a8',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255,255,255,0.1), 0 0 10px rgba(255,255,255,0.05)' },
          '100%': { boxShadow: '0 0 20px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1)' },
        },
      },
    },
  },
  plugins: [],
}
