// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
            '0%, 100%': { boxShadow: '0 0 15px rgba(79, 70, 229, 0.6), 0 0 30px rgba(79, 70, 229, 0.4)' },
            '50%': { boxShadow: '0 0 30px rgba(79, 70, 229, 0.8), 0 0 50px rgba(79, 70, 229, 0.6)' },
        },
        pulseGlow: {
            '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(0,255,255,0.7))' },
            '50%': { filter: 'drop-shadow(0 0 15px rgba(0,255,255,1))' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}