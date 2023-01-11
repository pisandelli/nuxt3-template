import { createI18n } from 'vue-i18n'
import en from '@/locales/en-us.json'
import pt from '@/locales/pt-br.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    sync: false,
    locale: 'pt',
    globalInjection: true,
    messages: { en, pt }
  })

  vueApp.use(i18n)
})
