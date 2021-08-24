const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const linaria = require('next-linaria')

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        imagesName: '[name].[ext]',
      },
    ],
    [linaria, {}],
  ],
  {
    /* config options here */
    images: {
      disableStaticImages: true,
    },
  },
)
