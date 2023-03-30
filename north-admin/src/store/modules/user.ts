/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-29 14:08:47
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-30 11:21:10
 * @FilePath: \north\north-admin\src\store\modules\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ILogin, IUserInfo } from '@/interfaces/store/user'
import { defineStore } from 'pinia'
import { login, getUserInfo } from '@/api/user/index'
import { SET_TOKEN, REMOVE_TOKEN } from '@/utils/auth'
const useUserStore = defineStore('user', {
  state: () => {
    return {
      uid: null,
      userName: null,
      avatar: null,
      gender: null,
      nickName: null
    }
  },
  persist: true,
  actions: {
    // 登陆
    Login(userData: ILogin) {
      return new Promise((resolve, reject) => {
        login(userData).then((response) => {
          console.log('responseByStore', response)
          const fetchData = response.data
          if (fetchData.code === 200) {
            SET_TOKEN(fetchData.result.token)
            this.uid = fetchData.result.uid
            this.GetUserInfo({ uid: this.uid })
            resolve(fetchData)
          } else {
            reject(fetchData)
          }
        })
      })
    },
    // 获取用户信息
    GetUserInfo(userinfoData: IUserInfo) {
      return new Promise((resolve, reject) => {
        getUserInfo(userinfoData).then((response) => {
          console.log('getUserInfo', response)
          const fetchData = response.data
          if (fetchData.code === 200) {
            this.avatar = fetchData.result.avatar
            this.userName = fetchData.result.userName
            this.gender = fetchData.result.gender
            this.nickName = fetchData.result.nickName
            resolve(fetchData)
          } else {
            reject(fetchData)
          }
        })
      })
    }
  }
})

export default useUserStore