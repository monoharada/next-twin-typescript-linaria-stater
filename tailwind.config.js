module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // require('tailwindcss-margin-safe')(),
    // require('tailwindcss-padding-safe')(),
    require('tailwindcss-typography')({
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: false, // whether to generate hyphenation utilities
      kerning: false, // whether to generate kerning utilities
      textUnset: false, // whether to generate utilities to unset text properties
    }),
  ],
}
