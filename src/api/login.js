import request from '@/request'

/**
 * @description 通过手机号进行登录
 * @param {String} phone 手机号
 * @param {String} password 密码
 */
export function loginByPhone({ phone, password }) {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data: {
      phone,
      password
    }
  })
}

/**
 * @description 退出登陆
 */
export function logout() {
  return request({
    url: '/api/oauth/logout',
    method: 'POST'
  })
}
