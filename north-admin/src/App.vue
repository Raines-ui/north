<!--
 * @Author: wuxc 2445951561@qq.com
 * @Date: 2023-02-18 21:04:30
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-25 18:02:36
 * @FilePath: \north-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { getMessageList } from './api/user/home'
import { Airplane24Filled, AnimalRabbit24Regular } from '@vicons/fluent'
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
setup() {
  interface Message {
    id: string
    name: string
    content: string
    createTime: string
}
  let messageList = ref<any>([]);
let total = 0;
let listQuery = {
  page:3,
  size:10
}
function getList(){
  getMessageList(listQuery).then((response: any) => {
    messageList.value = response.data.result;
  })
}
return {
  messageList
}
}

})
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
    <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th>消息ID</th>
        <th>发送人</th>
        <th>内容</th>
        <th>创建时间</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in messageList" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.content}}</td>
        <td>{{item.createTime}}</td>
      </tr>
    </tbody>
  </n-table>
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
