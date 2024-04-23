/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        'container':"10rem"
      },
      colors:{
        'theme' : "#f9f9f9",
        'maincolor':"#ee4266"   
      },
    },
  },
  plugins: [],
}

