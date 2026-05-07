/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#ff6a00',
          deep: '#e85d00',
          glow: '#ff8a3d',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          2: '#232323',
          3: '#2d2d2d',
          4: '#3a3a3a',
        },
        cream: '#f5f5f3',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        head: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,106,0,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(255,106,0,0.7)' },
        },
      },
    },
  },
  plugins: [],
}
