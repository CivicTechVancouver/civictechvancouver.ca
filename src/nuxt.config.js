// use process to check 'env.DEV' as we don't need to use Firebase Cloud Functions and Firebase Hosting while development.
// When we use other Firebase services this may not work. Because code base is relying on Firebase.
const process = require("process")

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Civic Tech Vancouver',
    meta: [
      { name: 'robots', content: 'noindex' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Civic Tech Vancouver' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: ['~/plugins/firebase'],
  modules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    theme: {
      primary: "#28CC9E",
      secondary: "#7EFFDB",
      accent: "#FFEA00",
      error: "#f44336",
      warning: "#ffeb3b",
      info: "#2196f3",
      success: "#4caf50"
    }
  },
  /*
  ** Build configuration
  */
  buildDir: process.env.DEV ? '.nuxt' : '../functions/nuxt',
  build: {
    publicPath: process.env.DEV ? '/public/' : '/',
    vendor: ['babel-polyfill', 'vuexfire'],
    extractCSS: true,
    babel: {
      presets: [
        'es2015',
        'stage-0'
      ],
      plugins: [
        ['transform-runtime', {
          'polyfill': true,
          'regenerator': true,
        }]
      ],
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

