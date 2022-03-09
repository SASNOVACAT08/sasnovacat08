export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ruben Barros | Développeur Web',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bonjour, je suis Ruben Barros, développeur web ...' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-awesome-swiper.ts', mode: 'client' },
    { src: './plugins/particles-vue.ts', mode: 'client' },
    { src: './plugins/vue-typer.ts', mode: 'client' },
    { src: './plugins/vue-clipboard2.ts', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
      icons: {
        solid: [
          'faAt',
          'faPhone'
        ],
        brands: [
          'faLinkedinIn',
          'faGithub'
        ]
      }
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
