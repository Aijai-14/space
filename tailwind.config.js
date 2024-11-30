/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        hyperspace: {
          '0%': { 
            transform: 'translateX(0) translateY(0) scale(1)',
            opacity: '0.7'
          },
          '100%': { 
            transform: 'translateX(200px) translateY(200px) scale(0)',
            opacity: '0'
          }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        timeline: {
          '0%': { transform: 'translateY(-50%)', opacity: 0 },
          '100%': { transform: 'translateY(calc(50vh - 50%))', opacity: 1 }
        },
        starmovement: {
          '0%': { transform: 'translateX(0) translateY(0) scale(1)', opacity: '0.7' },
          '100%': { transform: 'translateX(200px) translateY(200px) scale(0)', opacity: '0'}
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        hyperspace: 'hyperspace linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        timeline: 'timeline 2s ease-out forwards',
        starmovement: 'starmovement 10s linear infinite',
        rotate: 'rotate 10s linear infinite'
      }
    },
  },
  plugins: [],
}

