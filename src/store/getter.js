import { defineStore, mapState } from 'pinia'
import { useUserStore } from './user'
import { useAppStore } from './app'

export const useGetters = defineStore({
  id: 'getters',
  getters: {
    ...mapState(useUserStore, ['token']),
    ...mapState(useAppStore, ['collapsed', 'language'])
  }
})
