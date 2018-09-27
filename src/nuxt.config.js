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
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Civic Tech Vancouver' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: process.env.DEV ? '.nuxt' : '../functions/nuxt',
  build: {
    publicPath: process.env.DEV ? '/public/' : '/',
    vendor: ['axios', 'babel-polyfill'],
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

