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
import { h, Component, ref, onMounted } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  Home20Regular as HomeIcon,
  BookmarkMultiple16Filled as BookIcon,
  Person12Regular as PersonIcon
} from '@vicons/fluent'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '回家' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '且听风吟'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Directive',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '自定义指令' }
      ),
    key: 'directive',
    icon: renderIcon(BookIcon),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(PersonIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>

<style lang="scss" scoped>

::v-deep .header-container {
  position: fixed;
  top: 0;
  z-index: 999;
  background: var(--n-color);
}
</style>