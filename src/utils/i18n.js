import i18n from '@/i18n'
import website from '@/config/website'

const globalI18n = i18n.global

/**
 * 根据给定的键进行文本翻译。
 *
 * @param {string} key - 用于翻译的键。
 * @returns {string} - 找到键时返回翻译后的文本，否则返回原始键。
 */
export const translateText = key => {
  const hasKey = globalI18n.te(key)

  if (hasKey) {
    const translatedText = globalI18n.t(key)
    return translatedText
  }

  return key
}

/**
 * 设置页面标题。
 *
 * @param {object} route - 路由对象。
 */
export const setTitle = route => {
  const { title } = route.meta
  document.title = title === '404' ? title : `${translateText(website.title)} - ${translateText(title)}`
}
