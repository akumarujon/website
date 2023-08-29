export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
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
  build: {
      extractCSS: {
        ignoreOrder: true,
        include: [
          /\/node_modules/,
          /\.vue$/,
          /\.vue\?vue&type=style/,
          /\/_nuxt/
        ]
      }
    }
})
