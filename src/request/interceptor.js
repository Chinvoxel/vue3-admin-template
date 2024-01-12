import { ElMessage } from 'element-plus'

export const handleNetworkError = response => {
  const { status, statusText } = response

  let errMessage = '未知错误'
  if (status) {
    switch (status) {
      case 400:
        errMessage = '错误的请求'
        break
      case 401:
        errMessage = '未授权，请重新登录'
        break
      case 404:
        errMessage = '请求错误,未找到该资源'
        break
      default:
        errMessage = statusText
    }
  } else {
    errMessage = `无法连接到服务器！`
  }

  ElMessage.error(errMessage)
}
