require('dotenv').config()

const fs = require('fs')
const blogPostRoutes = fs
  .readdirSync('./app/static/blog-posts')
  .map(filename => {
    if (filename.indexOf('.md') === -1) {
      return null
    }

    return {
      route: `/${filename.slice(0, -3)}`,
      payload: fs.readFileSync(`./app/static/blog-posts/${filename}`, {
        encoding: 'utf8'
      })
    };
  })
  .filter(n => !!n)

module.exports = {
  srcDir: 'app/',

  css: ['~/assets/scss/app.scss'],

  modules: [
    '@nuxtjs/axios'
  ],

  plugins: [
    '~/plugins/vue-filters',
  ],

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

  generate: {
    routes: blogPostRoutes
  },

  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
}
