/*
 * @Author: wuxc 2445951561@qq.com
 * @Date: 2023-02-19 00:02:24
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-25 16:34:54
 * @FilePath: \north-admin\src\api\basis\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

//用户列表
export const findAll = () => {
  return axios({
    method: 'get',
    url: '/api/mockGetList'
  });
}

// 获取消息列表
export const getMessageList = (data: any) => {
  return axios({
    method: 'get',
    url: '/api/home/getMessageList',
    data: data
  })
}