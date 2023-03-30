/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-29 10:44:06
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-30 10:54:29
 * @FilePath: \north\north-admin\src\api\user\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'
import { ILogin, IUserInfo } from '@/interfaces/store/user'

//登陆
export const login = (data: ILogin) => {
  return request({
    method: 'post',
    url: '/api/login',
    data: data
  });
}

//获取用户信息
export const getUserInfo = (data: IUserInfo) => {
  return request({
    method: 'get',
    url: '/api/user/getUserInfo',
    params: data
  });
}