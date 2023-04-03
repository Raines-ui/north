/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-28 14:23:09
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-31 14:45:42
 * @FilePath: \north\north-admin\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
    meta: {
      title: '登陆'
    }
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue'),
    meta: {
      title: '首页'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router