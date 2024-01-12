export default class FormValidator {
  /**
   * 是否为手机号
   * @param {*} val
   */
  static isMobile(val) {
    return /^1[0-9]{10}$/.test(val)
  }

  /**
   * 是否为空
   * @param {*} val
   * @returns {boolean}
   */
  static isEmpty(val) {
    if (val === null || typeof val === 'undefined' || (typeof val === 'string' && val === '' && val !== 'undefined')) {
      return true
    }
    return false
  }
}
