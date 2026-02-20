import { createI18n } from 'vue-i18n'
import zh from './locales/zh.js'
import en from './locales/en.js'

function detectLocale() {
  const saved = localStorage.getItem('locale')
  if (saved === 'zh' || saved === 'en') return saved
  const lang = (navigator.language || 'en').toLowerCase()
  return lang.startsWith('zh') ? 'zh' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { zh, en },
})
