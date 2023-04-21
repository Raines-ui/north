<template>
  <n-layout class="w-full h-full">
    <n-layout-header class="header-container">
      <Header></Header>
    </n-layout-header>
    <n-layout style="height: calc(100vh - 10rem);" class="mt-20" has-sider>
      <n-layout-sider content-style="padding: 24px;" class="shadow-2xl">
        <n-menu :options="menuOptions" />
      </n-layout-sider>
      <n-layout-content class="h-full">
        <n-scrollbar style="padding: 24px;" class="h-full box-border">
          <router-view></router-view>
          <!-- 回到顶部 -->
          <n-back-top right="80" bottom="100" style="z-index: 1000;" />
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
    <n-layout-footer class="h-20 p-10 box-border">成府路</n-layout-footer>
  </n-layout>
</template>
<script lang="ts" setup>
import Header from '@/layout/header.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { h, render, onMounted, VNodeProps } from 'vue'
import { MenuOption, NIcon } from 'naive-ui'
import { RouterLink, useRouter } from 'vue-router'
/**
 * @param iconName 图标名称
 */
function renderIcon(iconName: String) {
  return () => h(NIcon, { size:'24', color: 'inherit' }, { default: () => h(SvgIcon, { icon: <string>iconName }, '') })
}

function renderMenuRouter(route: any) {
  return (() => h(<any> RouterLink, <VNodeProps>{ to: route.path } , <string>route?.meta.title ))
}

function createMenu(menus:any){
  return menus.map((item:any) => {
    let menuChilds = null
    if(item.children?.length > 0){
      menuChilds = createMenu(item.children)
    }
    return {
      key: item?.name,
      label: renderMenuRouter(item),
      icon: item?.meta.icon ? renderIcon(item?.meta.icon) : null,
      children: menuChilds
    }
  })
}
let menuOptions: MenuOption[] = []
const Router = useRouter()
menuOptions = createMenu(Router.options.routes)

</script>

<style lang="scss" scoped>

::v-deep .header-container {
  position: fixed;
  top: 0;
  z-index: 999;
  background: var(--n-color);
}
</style>