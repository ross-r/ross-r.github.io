// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  css: [
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        "data-theme": "business"
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    },
    rootId: ""
  },
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Inter: {
            wght: [400, 600, 700],
          },
        },
        subsets: ['latin'],
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
      },
    ],
    "@nuxt/image",
    "@nuxt/content"
  ],
  content: {
    highlight: {
      theme: 'github-dark-dimmed',
      preload: [
        'diff', 
        'ts', 
        'js', 
        'css', 
        'java', 
        'groovy', 
        'sql', 
        'xml', 
        'json',
        'cpp'
      ],
    },
  }
})