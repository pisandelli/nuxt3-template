import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      title: 'Nuxt 3 Scaffolding'
    }
  },
  components: {
    dirs: [
      '~/components',
      { path: '~/layouts/compositions', pathPrefix: false }
    ]
  },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    styles: fileURLToPath(new URL('./assets/styles', import.meta.url))
  },
  typescript: {
    shim: false
  },
  css: ['@/assets/styles/reset.styl'],
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [
            fileURLToPath(
              new URL('./assets/styles/abstracts/*.styl', import.meta.url)
            ),
            fileURLToPath(
              new URL('./assets/styles/utilities/*.styl', import.meta.url)
            )
          ]
        }
      }
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/html-validator',
    '@nuxtjs/robots',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-purgecss',
    '@nuxtjs/web-vitals',
    'nuxt-icon',
    '@morev/vue-transitions/nuxt',
    '@pinia/nuxt'
  ],
  i18n: {
    // Add options for i18n here
    // https://i18n.nuxtjs.org/options-reference
    locales: [
      { code: 'en', file: 'en-us.json' },
      { code: 'pt-br', file: 'pt-br.json' }
    ],
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'pt-br'
  },
  googleFonts: {
    // Add options for Google Fonts
    // https://google-fonts.nuxtjs.org/options
    families: {
      'Open+Sans': [300, 400, 600, 700]
    }
  },
  htmlValidator: {
    // Add custom options for HTML-Validator
    // https://html-validator.nuxtjs.org/#configuration-optional
    // https://html-validate.org/rules/index.html
    options: {
      rules: {
        'no-dup-class': 'off' // Avoid error for classes using [ ] notation
      }
    }
  },
  robots: {
    // add robots config here
    // https://github.com/nuxt-community/robots-module#robots-config
  },
  image: {
    // add nuxt-image config here
    // https://v1.image.nuxtjs.org/configuration
  },
  vueUse: {
    // No options, but see the section Caveats for further info
    // https://www.npmjs.com/package/@vueuse/nuxt}
  },
  colorMode: {
    // Control the site color Mode
    // https://color-mode.nuxtjs.org/
  },
  purgecss: {
    // Add purgecss options
    // https://purgecss.com/guides/nuxt.html#options
  },
  webVitals: {
    // Add custom config
    // https://github.com/nuxt-modules/web-vitals#options
  },
  nuxtIcon: {
    // Add custom options for NuxtIcon
    // https://github.com/nuxt-modules/icon
  },
  vueTransitions: {
    // Add custom options for vueTransitions
    // https://github.com/MorevM/vue-transitions#usage-with-nuxt
  }
})
