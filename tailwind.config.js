/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#102033',
        navy: '#12355B',
        ocean: '#1D8ED6',
        teal: '#0F9F9A',
        mist: '#F5F8FB',
        line: '#D9E3EC',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(16, 32, 51, 0.08)',
        card: '0 10px 26px rgba(16, 32, 51, 0.07)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(18, 53, 91, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 53, 91, 0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
