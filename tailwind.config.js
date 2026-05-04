/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        'bg-dark': '#08090A',
        'bg-card': '#0F1113',
        'primary': '#FFFFFF',
        'secondary': '#94A3B8',
        'accent-primary': '#CCFF00',
        'accent-secondary': '#8B5CF6',
        'accent-glow': 'rgba(204, 255, 0, 0.15)',
        'glass-border': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'float': 'float 10s infinite ease-in-out',
        'scan': 'scan 6s linear infinite',
        'particle-drift': 'particle-drift 12s linear infinite',
        'pulse-neon': 'pulse-neon 2s infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1200%)' },
        },
        'particle-drift': {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '20%': { opacity: '0.4' },
          '80%': { opacity: '0.4' },
          '100%': { transform: 'translate(var(--tw-translate-x, 20px), -200px)', opacity: '0' },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(204, 255, 0, 0.15)' },
          '50%': { boxShadow: '0 0 25px rgba(204, 255, 0, 0.25)' },
        }
      }
    },
  },
  plugins: [],
}
