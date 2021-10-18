module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '1000px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Jost'],
      brandh: ['nickname']
    },
    extend: {
      colors: {
        'accent-1': '#663399',
        'accent-2': '#5c4879'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
