<template>
  <n-layout class="w-full h-full">
    <n-layout-header class="header-container p-2 h-20">
      <Header></Header>
    </n-layout-header>
    <n-layout style="height: calc(100% - 10rem);" class="mt-20" has-sider>
      <n-layout-sider content-style="padding: 24px;">
        <n-menu :options="menuOptions" />
      </n-layout-sider>
      <n-layout-content>
        <div style="padding: 24px;">
          <router-view></router-view>
          <!-- 回到顶部 -->
          <n-back-top :right="50" :bottom="120" />
        </div>
      </n-layout-content>
    </n-layout>
    <n-layout-footer class="h-20 p-10 box-border">成府路</n-layout-footer>
  </n-layout>
</template>
<script lang="ts" setup>
import Header from '@/layout/header.vue'
import { h, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  Home20Regular as HomeIcon,
  BookmarkMultiple16Filled as BookIcon,
  Person12Regular as PersonIcon
} from '@vicons/fluent'
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
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
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
    disabled: true
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
// .n-layout {
//   background-color: unset !important;
// }

// .n-layout-sider {
//   box-shadow: 5px 5px 10px var(--n-border-color),
//     -5px -5px 10px var(--n-border-color);
// }

// .n-layout-footer {
//   box-shadow: 5px -5px 10px #a4a4a4,
//     -5px 5px 10px #ffffff;
// }

.header-container{
    position: fixed;
    top: 0;
    z-index: 999;
    background: var(--n-color);
    box-shadow:  5px 5px 20px var(--text-color-4),
             -5px -5px 20px transparent;
}

.n-layout-scroll-container{
  min-height: calc(100% - 10rem)!important;
}
</style>