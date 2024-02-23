/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens:{
      xsm:{'min':'300px','max':'400px'},
      sm: {'min':'400px','max':'600px'},
      md: {'min':'600px','max':'800px'},
      lg: {'min':'800px','max':'1200px'},
    },
    extend: {},
  },
  plugins: [],
}

