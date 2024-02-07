export default defineNuxtConfig({
  devtools: { enabled: true },


  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  head: {
    htmlAttrs: {
      lang: "en",    
    },
  },

  css: [
    '@/assets/css/main.css',
  ],


  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      }
    }
  },


  buildModules: ['@nuxt/pwa'],


  build: {
      extractCSS: {
        ignoreOrder: true,
        include: [
          /\/node_modules/,
          /\.vue$/,
          /\.vue\?vue&type=style/,
          /\/_nuxt/
        ]
      },
    },

})
