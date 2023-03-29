import Mock from 'mockjs'
import { ILogin } from '@/interfaces/store/user'
// 生成随机数据
const Random = Mock.Random
//登陆
export function login(options: any) {
  const body: ILogin = JSON.parse(options.body)
  const userData = {
    username: 'admin',
    password: '123456'
  }
  if (body.username !== userData.username || body.password !== userData.password) {
    return {
      code: 400,
      result: null,
      message: '账号或密码错误'
    }
  }
  return {
    code: 200,
    result: {
      username: 'admin',
      uid: '13587',
      // 随机生成token
      token: Random.guid()
    },
    message: '登陆成功'
  }
}