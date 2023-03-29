/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-29 10:45:45
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-29 10:50:57
 * @FilePath: \north\north-admin\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: '/',
  // 超时
  timeout: 10000
})
export default service
