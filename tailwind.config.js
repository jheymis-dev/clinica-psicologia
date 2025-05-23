/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '820px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        // montserrat: ['Montserrat', 'sans-serif'],
        // lora: ['Lora', 'serif'],
      }
    },
    colors: {
      azul_01: '#014284', // Nome "minhaCor" e o código hexadecimal
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'html': { scrollBehavior: 'smooth' },
      })
    },
  ],
}

