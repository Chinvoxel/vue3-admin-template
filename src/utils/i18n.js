import i18n from '@/i18n'

export const generateTitle = title => {
  const hasKey = i18n.global.te(`route.${title}`)

  if (hasKey) {
    const translatedTitle = i18n.global.t(`route.${title}`)
    return translatedTitle
  }
  return title
}
