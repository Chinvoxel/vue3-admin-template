import { defineStore } from 'pinia'
import { Storage } from '@/utils/storage'
import { getLanguage } from '@/i18n'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    collapsed: Storage.get('collapsed') || false,
    language: getLanguage() || 'zh'
  }),

  actions: {
    TOGGLE_SIDEBAR() {
      this.collapsed = !this.collapsed
      Storage.set('collapsed', this.collapsed)
    },

    SET_LANGUAGE(language) {
      this.language = language
      Storage.set('language', language)
    }
  }
})
