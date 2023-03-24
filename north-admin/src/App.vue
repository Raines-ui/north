<!--
 * @Author: wuxc 2445951561@qq.com
 * @Date: 2023-02-18 21:04:30
 * @LastEditors: wuxc 2445951561@qq.com
 * @LastEditTime: 2023-02-19 00:51:47
 * @FilePath: \north-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import './mock/index.ts'
import { findAll } from './api/user/home'
import { Airplane24Filled, AnimalRabbit24Regular } from '@vicons/fluent'
function getList() {
  findAll().then((res: any) => {
    console.log('res', res)
  })
}
</script>

<template>
  <div>
    <div class="truncate w-60 h-20">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
      repellendus odit pariatur dolorum molestias possimus. Quam excepturi, quo
      molestiae est culpa sapiente accusamus perspiciatis maiores magnam? Aut
      nesciunt ipsam commodi!
    </div>
    <n-space>
      <n-button @click="getList">获取mock数据</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
    <n-space>
      <n-icon size="40" color="#0e7a0d">
        <Airplane24Filled />
      </n-icon>
      <n-icon size="30" color="red">
        <AnimalRabbit24Regular />
      </n-icon>
    </n-space>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
