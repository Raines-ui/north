/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-04 15:15:00
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-04 15:16:49
 * @FilePath: \north\north-admin\src\store\modules\theme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
const useThemeStore = defineStore('theme', {
  state() {
    return {
      isDarkTheme: false
    }
  },
  getters: {
    getDarkTheme(): boolean {
      return this.isDarkTheme
    }
  }
})

export default useThemeStore