// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br',
      },
      title: 'Nuxt 3 Scaffolding',
    },
  },
  // Read more about Nuxt Layers
  // https://nuxt.com/docs/getting-started/layers
  extends: [
    // Layout compositions for Nuxt
    // https://github.com/pisandelli/nuxt-layout-compositions
    'nuxt-layout-compositions',
  ],
  components: {
    dirs: [
      { path: '~/components/_widgets', pathPrefix: false, prefix: 'W' },
      '~/components',
    ],
  },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    style: fileURLToPath(new URL('./assets/styles', import.meta.url)),
    utilities: fileURLToPath(
      new URL('./assets/styles/utilities', import.meta.url),
    ),
  },
  css: ['@/assets/styles/reset.styl'],
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [
            fileURLToPath(
              new URL('./assets/styles/abstracts/*.styl', import.meta.url),
            ),
          ],
        },
      },
    },
  },
  modules: [
    [
      '@morev/vue-transitions',
      {
        // Add custom options for vueTransitions
        // https://github.com/MorevM/vue-transitions#usage-with-nuxt
      },
    ],
    [
      '@nuxt/eslint',
      {
        // Add custom options for ESLint
        // https://eslint.nuxt.com/packages/config
      },
    ],
    [
      '@nuxt/icon',
      {
        // Add custom options for NuxtIcon
        // https://github.com/nuxt-modules/icon
      },
    ],
    [
      '@nuxt/image',
      {
        // add nuxt-image config here
        // https://v1.image.nuxtjs.org/configuration
        format: ['webp'],
        dir: 'assets/images/',
      },
    ],
    [
      '@nuxt/scripts',
      {
        // READY for you to Rock!
      },
    ],
    [
      '@nuxt/test-utils/module',
      {
        //Add options for @nuxt/test-utils
        //https://test-utils.nuxtjs.org/usage,
      },
    ],
    [
      '@nuxtjs/color-mode',
      {
        // Control the site color Mode
        // https://color-mode.nuxtjs.org/
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        // Add options for Google Fonts
        // https://google-fonts.nuxtjs.org/options
        preload: true,
        families: {
          'Noto Sans': '300..700',
        },
      },
    ],
    [
      '@nuxtjs/html-validator',
      {
        // Add custom options for HTML-Validator
        // https://html-validator.nuxtjs.org/#configuration-optional
        // https://html-validate.org/rules/index.html
        logLevel: 'warning',
      },
    ],
    [
      '@nuxtjs/robots',
      {
        // CHECKLATER: Maybe worth using Nuxt SEO package
        // add robots config here
        // https://nuxtseo.com/robots/guides/robots-txt
        disallow: [''],
      },
    ],
    [
      '@nuxtjs/web-vitals',
      {
        // Add custom config
        // https://github.com/nuxt-modules/web-vitals#options
        ga: { id: process.env.GOOGLE_ANALYTICS_ID || 'UA-000000000-1' },
      },
    ],
    [
      '@pinia/nuxt',
      {
        // Add custom options for vueTransitions
        // https://pinia.vuejs.org/api/interfaces/pinia_nuxt.ModuleOptions.html
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    [
      '@vueuse/nuxt',
      {
        // No options, but see the section Caveats for further info
        // https://www.npmjs.com/package/@vueuse/nuxt}
      },
    ],
    [
      'dayjs-nuxt',
      {
        // Add custom options for dayjs
        // https://nuxt.com/modules/dayjs#configuration
        locales: ['pt-br'],
        defaultLocale: 'pt-br',
        plugins: [],
      },
    ],
  ],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
});
