/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4ed',
          100: '#fbe8d9',
          200: '#f7d0b3',
          300: '#f2b88d',
          400: '#ee9066',
          500: '#e96840',
          600: '#d44d2e',
          700: '#b03a26',
          800: '#8d3024',
          900: '#722920',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae7',
          300: '#b9c5da',
          400: '#9faece',
          500: '#8597c2',
          600: '#6b7eb6',
          700: '#5666a9',
          800: '#45528c',
          900: '#394471',
        },
        accent: {
          50: '#f3f9fb',
          100: '#e7f3f7',
          200: '#cfe7ef',
          300: '#b7dbe7',
          400: '#9fcfdf',
          500: '#87c3d7',
          600: '#6fb7cf',
          700: '#579bc7',
          800: '#457fa0',
          900: '#376579',
        }
      },
      boxShadow: {
        'warm': '0 4px 14px 0 rgba(233, 104, 64, 0.15)',
        'warmer': '0 6px 20px 0 rgba(233, 104, 64, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};