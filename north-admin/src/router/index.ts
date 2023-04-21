/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-28 14:23:09
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-21 14:15:37
 * @FilePath: \north\north-admin\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-28 14:23:09
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-21 11:55:19
 * @FilePath: \north\north-admin\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/layout.vue'
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
    path: '/404',
    name: '404',
    component: () => import('../views/error/404.vue'),
    meta: {
      title: '页面无法访问'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PathMatch',
    redirect: '/404',
    meta: {
      title: '重定向'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '测试'
    }
  },
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/index',
        name: 'Home',
        component: () => import('../views/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/directive',
        name: 'Directive',
        component: () => import('../views/directive/index.vue'),
        meta: {
          title: '自定义指令'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router