module.exports = {
  plugins: ['jsx-a11y'],
  extends: ['next', 'next/core-web-vitals', 'plugin:jsx-a11y/recommended'],
  rules: {
    '@next/next/no-img-element': 0,
  },
}
