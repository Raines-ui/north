import Mock from 'mockjs'
import { ILogin, IUserInfo } from '@/interfaces/store/user'
import { getParams } from '../../utils/index'
import avatar from '@/assets/avatar.jpg'
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
      uid: '13587',
      // 随机生成token
      token: Random.guid()
    },
    message: '登陆成功'
  }
}

//登陆
export function getUserInfo(options: any) {
  console.log('useroptions', options)
  const userinfoData: IUserInfo = getParams(options.url)
  console.log('userinfoData', userinfoData)
  const uid = '13587'
  if (userinfoData.uid !== uid) {
    return {
      code: 400,
      result: null,
      message: '抱歉，当前用户不存在'
    }
  }
  return {
    code: 200,
    result: {
      uid: '13587',
      userName: 'admin',
      gender: 1, // 0 女 1 男
      nickName: 'L.L.',
      avatar: avatar
    },
    message: '获取用户信息成功'
  }
}