<template> 
    <div id="app-container">
      <router-view></router-view>
    </div>
</template>
<script lang="ts" setup>
  import { useDialog, useMessage, useNotification, useLoadingBar } from "naive-ui"
  //  实例方法挂载
  window.$message = useMessage()
  window.$dialog = useDialog()
  window.$notification = useNotification()
  window.$loadingBar = useLoadingBar()
</script>
<style lang="scss" scoped>
#app-container{
  width: 100%;
  height: 100%;
  max-width: unset;
  margin: 0 auto;
  padding: 0;
  text-align: unset;
}
</style>