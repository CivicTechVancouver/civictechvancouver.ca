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
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/google-analytics',
      { id: 'UA-59923195-5' }
    ]
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
  buildDir: '.nuxt',
  build: {
    publicPath: '/',
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

