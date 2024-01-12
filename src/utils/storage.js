export class Storage {
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static get(key, defaultValue = null) {
    const value = localStorage.getItem(key)
    if (value !== null) {
      return JSON.parse(value)
    }
    return defaultValue
  }

  static remove(key) {
    localStorage.removeItem(key)
  }

  static clear() {
    localStorage.clear()
  }
}
