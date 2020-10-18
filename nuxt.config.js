
/* eslint-disable prettier/prettier */
export default {
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-koa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/index.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/buefy',
    '~/plugins/fas.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookies' }],
  ],
  // server middleware
  serverMiddleware: {
    '/api': '~/server/index.js'
  },
  
  middleware: [
    'loadingCookies',
    // for secure route
    'auth',
    'guest'


  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    '/api/': { target: `${process.env.BASE_URL}/api`}
  },
  watch: [
    '~/server'
  ],

  router: {
    // linkActiveClass: 'is-active',
    // linkExactActiveClass: 'is-active',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
}

