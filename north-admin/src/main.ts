/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-02-17 09:53:46
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-29 14:07:51
 * @FilePath: \north\north-admin\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from "naive-ui"
import './styles/tailwind.css' // 引入tailwind.css
import './mock/index.ts' // 使用mockjs模拟数据
import pinia from './store/index' // 注册pinia
import router from './router/index'
const instance = createApp(App)
// 注册NaiveUi
instance.use(naive)
// 注册路由
instance.use(router)
// 注册pinia
instance.use(pinia)
instance.mount('#app')
