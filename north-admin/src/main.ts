/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-02-17 09:53:46
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-31 15:50:35
 * @FilePath: \north\north-admin\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from "naive-ui"
import './styles/tailwind.css' // 引入tailwind.css
import './mock/index.ts' // 使用mockjs模拟数据
import 'virtual:svg-icons-register'
// 全局引入SvgIcon组件
import SvgIcon from "@/components/SvgIcon/index.vue";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 注册pinia
const pinia = createPinia()
// pinia 持久化存储
pinia.use(piniaPluginPersistedstate)
import router from './router/index'
// 路由守卫
import './permission'
// 全局指令
import vDynaButton from './directive/button/button'
const instance = createApp(App)
// 注册NaiveUi
instance.use(naive)
// 注册路由
instance.use(router)
instance.component('svg-icon', SvgIcon)
// 注册pinia
instance.use(pinia)
instance.mount('#app')
// 注册指令
instance.directive('dynaButton', vDynaButton)
