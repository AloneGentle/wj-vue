module.exports = {
  plugins: [
    {src: '~/plugins/nuxt-swiper-plugin.js', ssr: false}
  ],

  css: [
    'swiper/dist/css/swiper.css',
    '@/assets/css/shCoreDefault.css',
    '@/assets/css/sigmar.css',
    '@/assets/css/style.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: '语言学习',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '{{escape description }}'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  server: {
    port: 3004,
    host: 'localhost'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    }
  }
}

