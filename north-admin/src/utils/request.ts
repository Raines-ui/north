/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-29 10:45:45
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-31 17:54:59
 * @FilePath: \north\north-admin\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import type {
  InternalAxiosRequestConfig
} from 'axios'
import { GET_TOKEN } from './auth';
import useStore from '@/store';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: '/',
  // 超时
  timeout: 10000
})
// 请求拦截器
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // 在发送请求之前做些什么
  console.log('config', config)
  console.log('config.headers.isToken', config.headers.isToken)
  console.log('b', config.headers.isToken !== undefined && !config.headers.isToken, config.headers.isToken !== undefined)
  // 是否需要token验证, isToken 非必填
  if (config.headers.isToken !== undefined && config.headers.isToken === false) {
    console.log('不需要携带token')
  } else {
    // 需要token
    console.log('需要携带token')
    // 判断Token是否过期
    if (GET_TOKEN()) {
      config.headers['Admin-Token'] = `Bearer ${GET_TOKEN()}`
      console.log('MYconfig', config)
    } else {
      // 退出登陆
      const { userStore } = useStore()
      window.$message.error('令牌已过期，请重新登陆')
      userStore().Logout().then((response: any) => {
        if (response.data.code === 200) {
          console.success(response.data.message)
        } else {
          window.$message.error(response.data.message)
        }
      })
    }
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
export default service
