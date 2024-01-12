import { createI18n } from 'vue-i18n'
import { Storage } from '@/utils/storage'
import enLocale from '@/language/en'
import zhLocale from '@/language/zh'

export const messages = {
  zh: zhLocale,
  en: enLocale
}

// 导出一个函数，用于获取语言
export function getLanguage() {
  // 从本地存储中获取语言
  const storedLanguage = Storage.get('language')
  // 如果本地存储中有，则返回
  if (storedLanguage) return storedLanguage

  // 获取用户使用的语言
  const userLanguage = (navigator.language || navigator.browserLanguage).toLowerCase()
  // 获取可用的语言
  const availableLocales = Object.keys(messages)
  // 找到匹配的语言
  const matchedLocale = availableLocales.find(locale => userLanguage.includes(locale))
  // 如果没有匹配的语言，则返回中文
  return matchedLocale || 'zh'
}

const i18n = createI18n({
  locale: getLanguage(), // 默认显示语言
  legacy: false,
  globalInjection: true,
  messages
})

export default i18n
