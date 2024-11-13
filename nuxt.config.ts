// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/base.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    compilation: {
      strictMessage: false
    },
    locales: [
      { code: 'en', file: 'en.yaml', name: 'english' },
      { code: 'fr', file: 'fr.yaml', name: 'français' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: 'lang'
  }
})
