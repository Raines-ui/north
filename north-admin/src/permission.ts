/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-31 14:28:00
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-31 16:12:41
 * @FilePath: \north\north-admin\src\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "./router";
import { GET_TOKEN } from "./utils/auth";
// 全局前置守卫 跳转路由
router.beforeEach((to, from, next) => {
  // 通过TOKEN，判断是否登陆
  if (GET_TOKEN()) {
    if (to.name === 'Login') {
      // 如果跳转到登陆页，跳转首页
      next('/')
    } else {
      next()
    }
  } else {
    // 如果跳转页不是登录页，跳转登陆页
    if (!GET_TOKEN() && to.name !== 'Login') {
      next('/login')
    } else {
      // 跳转登录页，避免死循环
      next()
    }
  }
})