require('dotenv').config()

module.exports = {
  srcDir: 'app/',

  css: ['~/assets/scss/app.scss'],

  build: {
    vendor: [],

    extend(config, { _isDev, _isClient }) {
      // Exclude SVG loading from url loader
      const urlLoader = config.module.rules.find(
        rule => rule.loader === 'url-loader'
      )

      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader:
          'svg-inline-loader?removeSVGTagAttrs=false&classPrefix=true&idPrefix=true',
        exclude: [/static/],
      })
    },
  },

  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
}
