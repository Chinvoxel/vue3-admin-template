import { defineStore } from 'pinia'
import CryptoJS from 'crypto-js'
import { getToken, removeRefreshToken, removeToken, setToken } from '@/utils/token'
import { loginByPhone, logout } from '@/api/login'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: getToken() || ''
  }),

  actions: {
    LoginByPhone({ phone, password }) {
      return new Promise((resolve, reject) => {
        loginByPhone({ phone, password: CryptoJS.MD5(password).toString() })
          .then(res => {
            const { code, data, message } = res
            if (code !== 200) throw new Error(message)

            this.token = data.token
            setToken(data.token)

            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    FedLogout() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            this.SET_TOKEN('')
            removeToken()
            removeRefreshToken()
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    SET_TOKEN(token) {
      this.token = token
      setToken(token)
    }
  }
})
