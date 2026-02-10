/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0F1115',
        'text-primary': '#E6E6E6',
        'text-secondary': '#9AA0A6',
        'accent-blue': '#4F8CFF',
        'accent-glow': 'rgba(79, 140, 255, 0.25)',
        'glass-bg': 'rgba(20, 25, 30, 0.6)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        main: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Bitcount Single', 'system-ui', 'monospace'],
        recruiter: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-bg': 'gradientBG 15s ease infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'float': 'float 10s infinite ease-in-out',
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
