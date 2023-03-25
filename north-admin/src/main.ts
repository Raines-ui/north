/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-02-17 09:53:46
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-25 10:09:00
 * @FilePath: \north\north-admin\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from "naive-ui";
import './styles/tailwind.css' // 引入tailwind.css
import './mock/index.ts' // 使用mockjs模拟数据
createApp(App).use(naive).mount('#app')
