import { nextTick } from 'vue'

export default app => {
  app.config.errorHandler = (err, vm, info) => {
    nextTick(() => {
      console.log('vm: ', vm)
      console.log('info: ', info)
    })

    if (process.env.NODE_ENV === 'development') {
      window.console.group('>>>>>> 错误信息 >>>>>>')
      console.log('info: ', info)

      window.console.error(info)
      window.console.groupEnd()
      window.console.group('>>>>>> Vue 实例 >>>>>>')
      window.console.log(vm)
      window.console.groupEnd()
      window.console.group('>>>>>> Error >>>>>>')
      window.console.log(err)
      window.console.groupEnd()
    }
  }
}
