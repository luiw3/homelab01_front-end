module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0,1fr))'
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9'
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0,1fr))'
      },
      gridColumn: {
        'span-13': 'span 13 / span 13'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
