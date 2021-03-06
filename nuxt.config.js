require('dotenv').config()

const fs = require('fs')
const blogPostRoutes = fs
  .readdirSync('./app/static/blog-posts')
  .map((filename) => {
    if (filename.indexOf('.md') === -1) {
      return null
    }

    return {
      route: `/${filename.slice(0, -3)}`,
      payload: fs.readFileSync(`./app/static/blog-posts/${filename}`, {
        encoding: 'utf8',
      }),
    }
  })
  .filter((n) => !!n)

module.exports = {
  srcDir: 'app/',

  css: ['~/assets/scss/app.scss'],

  head: {
    titleTemplate(title) {
      return title ? `${title} » Paul Straw` : 'Paul Straw'
    },

    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: `I can't stop making things.`,
      },
    ],
  },

  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-92176484-1',
      },
    ],
  ],

  plugins: [{ src: '~/plugins/velocity', ssr: false }, '~/plugins/vue-filters'],

  buildModules: [
    '@nuxt/postcss8'
  ],

  build: {
    vendor: [],

    postcss: {
      plugins: {
        'postcss-aspect-ratio-polyfill': {}
      },
    },

    extend(config) {
      // Exclude SVG loading from url loader
      const imgLoader = config.module.rules.find((rule) => {
        console.warn('fml', rule.test.toString())
        return rule.test.toString() === `/\\.(png|jpe?g|gif|svg|webp|avif)$/i`
      })

      imgLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader:
          'svg-inline-loader?removeSVGTagAttrs=false&classPrefix=false&idPrefix=true',
        exclude: [/static/],
      })
    },
  },

  generate: {
    routes: blogPostRoutes,
  },

  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
}
