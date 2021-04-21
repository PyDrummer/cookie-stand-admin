module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin:{
        space: '500px',
        input: '300px',
        input2: '200px',
        input3: '250px'
      },
      padding: {
        'location': '1050px',
        '1080': '400px',
      },
      screens: {
        'break1': '2290px',
        'xl': '2560px',
        '1080p': {'max': '1920px'} ,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
