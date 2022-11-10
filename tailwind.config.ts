module.exports = {
    content: [
      './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
      './node_modules/@my-company/tailwind-components/**/*.js',
    ],
    theme: {
      extend: {
        color:{
          'orange-500': 'bg-orange-500'
        }
      }
    }
  }