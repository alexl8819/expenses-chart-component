/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      colors: {
        'soft-red': 'hsl(10, 79%, 65%)',
        'very-pale-orange': 'hsl(33, 100%, 98%)',
        'cream': 'hsl(27, 66%, 92%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        'dark-brown': 'hsl(25, 47%, 15%)'
      }
    },
  },
  plugins: [],
}
