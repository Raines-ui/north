/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-29 14:08:47
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-29 14:26:09
 * @FilePath: \north\north-admin\src\store\modules\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ILogin } from '@/interfaces/store/user'
import { defineStore } from 'pinia'
import { login } from '@/api/user/index'
const useUserStore = defineStore('user', {
  state: () => {
    return {
      uid: null,
      username: null,
      token: null
    }
  },
  actions: {
    // 登陆
    Login(userData: ILogin) {
      return new Promise((resolve, reject) => {
        login(userData).then((response) => {
          console.log('responseByStore', response)
          const fetchData = response.data
          if (fetchData.code === 200) {
            this.token = fetchData.result.token
            this.username = fetchData.result.username
            this.uid = fetchData.result.uid
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