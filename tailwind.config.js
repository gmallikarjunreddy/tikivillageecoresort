/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tiki: {
          dark: '#12100e',
          brown: '#2d1b15',
          orange: '#e64a19',
          gold: '#ffb300',
          leaf: '#2e7d32',
          sand: '#e0e0e0',
          charcoal: '#1a1a1a',
          overlay: 'rgba(18, 16, 14, 0.9)'
        }
      },
      fontFamily: {
        tribal: ['Rye', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'jungle-pattern': "url('https://www.transparenttextures.com/patterns/dark-wood.png')",
        'totem-pattern': "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')"
      },
      animation: {
        'slow-spin': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    }
  },
  plugins: [],
}
