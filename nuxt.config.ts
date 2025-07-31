import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { 
    enabled: false
  },
  ssr: false,
  icon: {
    provider: 'none',
    clientBundle: {
      scan: true,
      // ...or other bundle options
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/print.css'
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/scripts'
  ]
})