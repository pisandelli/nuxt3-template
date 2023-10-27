import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      title: 'Nuxt 3 Scaffolding'
    }
  },
  // Read more about Nuxt Layers
  // https://nuxt.com/docs/getting-started/layers
  extends: [
    // Layout compositions for Nuxt
    // https://github.com/pisandelli/nuxt-layout-compositions
    'nuxt-layout-compositions'
  ],
  components: {
    dirs: [
      '~/components'
    ]
  },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    styles: fileURLToPath(new URL('./assets/styles', import.meta.url))
  },

  // Enabled Take Over Mode or installed the TypeScript Vue Plugin (Volar)
  // https://nuxt.com/docs/getting-started/installation#prerequisites
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
            )
          ]
        }
      }
    },
    /**
     * @see https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html
     * */
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  modules: [
    ['@nuxtjs/google-fonts', {
      // Add options for Google Fonts
      // https://google-fonts.nuxtjs.org/options
      families: {
        'Open+Sans': [300, 400, 600, 700]
      }
    }],
    ['@nuxtjs/html-validator', {
      // Add custom options for HTML-Validator
      // https://html-validator.nuxtjs.org/#configuration-optional
      // https://html-validate.org/rules/index.html
      usePrettier: true,
      logLevel: 'warning',
      options: {
        rules: {
          'no-dup-class': 'off' // Avoid error for classes using [ ] notation
        }
      }
    }],
    ['@nuxtjs/robots', {
      // add robots config here
      // https://github.com/nuxt-community/robots-module#robots-config
    }],
    ['@nuxt/image', {
      // add nuxt-image config here
      // https://v1.image.nuxtjs.org/configuration
      dir: 'assets/images/'
    }],
    ['@vueuse/nuxt', {
      // No options, but see the section Caveats for further info
      // https://www.npmjs.com/package/@vueuse/nuxt}
    }],
    ['@nuxtjs/color-mode', {
      // Control the site color Mode
      // https://color-mode.nuxtjs.org/
    }],
    ['@nuxtjs/web-vitals', {
      // Add custom config
      // https://github.com/nuxt-modules/web-vitals#options
    }],
    ['nuxt-icon', {
      // Add custom options for NuxtIcon
      // https://github.com/nuxt-modules/icon
    }],
    ['@morev/vue-transitions/nuxt', {
      // Add custom options for vueTransitions
      // https://github.com/MorevM/vue-transitions#usage-with-nuxt
    }],
    '@pinia/nuxt'
  ]
})
