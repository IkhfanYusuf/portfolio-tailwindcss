module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'green-custom': '#52B69A',
        'yellow-custom': 'rgba(217, 237, 146, 0.87)',
        'container': '#25262A',
        'nav': '#303135'
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'green-custom': 'rgba(82, 182, 154, 1)',
        'green-custom-500': 'rgba(82, 182, 154, .5)',
      }),
      textColor: {
        'green-custom': "#52B69A",
      },
      fontSize: {
        'h1': ['46px', '60px'],
        'h2': ['30px', '45px'],
        'h1-mobile': ['22px', '32px'],
        'h2-mobile': ['16px', '24px']
      },
      opacity: {
        '87': '0.87'
      },
      borderColor: {
        'green-custom': '#52B69A',
        'container': '#25262A'
      },
      ringColor: {
        'green-custom': "#52B69A",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}