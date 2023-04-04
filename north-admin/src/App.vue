<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-25 09:59:32
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-04 16:12:31
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
import { defineComponent, ref, watch, computed } from 'vue'
import GlobalContainer from './layout/global.vue'
import { darkTheme } from 'naive-ui'
import useStore from '@/store/index'
export default defineComponent({
  name:'App',
  components:{
    GlobalContainer
  },
  setup() {
    const { themeStore } = useStore()
    const isDarkTheme:any = computed( ()=>  themeStore().isDarkTheme )
    let theme:any = ref(null)
    watch(isDarkTheme, (newValue, oldValue) => {
      console.log('theme changed from', oldValue, 'to', newValue);
      theme.value = newValue ? darkTheme : null
    });
    return {
      darkTheme,
      theme,
      GlobalContainer
    }
  }
})
</script>

<template>
  <n-config-provider :theme="theme">
    <n-el tag="div">
      <n-dialog-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-loading-bar-provider>
            <GlobalContainer/>
          </n-loading-bar-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-dialog-provider>
    </n-el>
  </n-config-provider>
</template>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  max-width: unset;
  margin: 0 auto;
  padding: 0;
  text-align: unset;
}
</style>
