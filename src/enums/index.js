const modules = import.meta.globEager('./*.js')

// 遍历当前文件夹下所有枚举文件
const enums = Object.keys(modules).reduce((acc, path) => {
  // 当前被遍历模块的枚举对象
  const moduleEnums = modules[path]
  // 遍历该枚举对象
  Object.keys(moduleEnums).forEach(key => {
    // 存在项目的枚举定义则覆盖
    if (acc[key]) {
      Object.assign(acc[key], moduleEnums[key])
    } else {
      // 否则收集枚举赋值给acc
      acc[key] = moduleEnums[key]
    }
  })
  return acc
}, {})

const EnumPlugin = {
  install(app) {
    app.config.globalProperties.$enums = enums
    app.provide('$enums', enums)
  }
}

export default EnumPlugin
