// tailwind.config.js
module.exports = {
   darkMode: 'class', 
  content: [
    ['./*.html'], // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
        "sm": "480px",
    },
  },
  fontfamily:{
    nunito:['Nunito','sans-serif'],
      gothic: ['"UnifrakturCook"', 'cursive'],
  },
  plugins: [],
}