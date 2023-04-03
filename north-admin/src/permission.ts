/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-31 14:28:00
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-03 14:57:53
 * @FilePath: \north\north-admin\src\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "./router";
import { GET_TOKEN } from "./utils/auth";
// 全局前置守卫 跳转路由前
router.beforeEach((to, from, next) => {
  // 开始进度条
  const Loading = window.$loadingBar || null
  Loading && Loading.start()
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

//全局后置守卫 跳转路由后 
router.afterEach((to, from) => {
  // 结束进度条
  const Loading = window.$loadingBar || null
  Loading && Loading.finish()
  if (typeof (to.meta?.title) === 'string') {
    document.title = to.meta.title ? to.meta.title : import.meta.env.VITE_APP_TITLE
  }
})