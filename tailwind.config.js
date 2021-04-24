module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1920px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '2560px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      margin:{
        space: '500px',
        input: '300px',
        input2: '100px',
        input3: '250px',
        lspace: '300px',
        create: '350px'
      },
      padding: {
        'l_space': '100px',
        'location': '1000px',
        '1080': '400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
