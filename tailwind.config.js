/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#FCE69B',
          400: '#F3D068',
          500: '#D4AF37', // Primary Luxury Gold
          600: '#B89326',
          700: '#997818',
        },
        luxury: {
          dark: '#0B0D12',
          surface: '#121620',
          card: '#181D2A',
          'card-hover': '#202738',
          border: '#2D354A',
          cream: '#FFFDF7',
          muted: '#9CA3AF',
          'light-bg': '#FAF8F5',
          'light-surface': '#F3EFE8',
          'light-card': '#FFFFFF',
          'light-border': '#E6E1D6',
          'light-text': '#1E2330',
          'light-muted': '#646A78',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.4)',
        'luxury': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
