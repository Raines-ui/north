<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-25 09:59:32
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-28 16:39:31
 * @FilePath: \north\north-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-25 09:59:32
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-28 14:59:26
 * @FilePath: \north\north-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: wuxc 2445951561@qq.com
 * @Date: 2023-02-18 21:04:30
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-28 11:33:38
 * @FilePath: \north-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name:'App',
  setup() {}
})
</script>

<template>
  <div id="app-container">
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </div>
</template>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app,#app-container{
  width: 100%;
  height: 100%;
  max-width: unset;
  margin: 0 auto;
  padding: 0;
  text-align: unset;
}
</style>
