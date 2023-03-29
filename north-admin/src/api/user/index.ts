import request from '@/utils/request'
import { ILogin } from '@/interfaces/store/user'

//登陆
export const login = (data: ILogin) => {
  return request({
    method: 'post',
    url: '/api/login',
    data: data
  });
}