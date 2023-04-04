<template>
  <header class="w-full h-full">
    <n-grid class="w-full h-full" item-responsive>
      <n-grid-item span="12 400:12 600:12 800:8 1200:6" class="h-full">
        <n-space align="center" justify="center" :wrap="false" class="h-full">
          <n-image width="100" :src="logo" preview-disabled />
          <span class="font-bold italic text-xl font-mono">North-Admin</span>
        </n-space>
      </n-grid-item>
      <n-grid-item span="0 400:0 600:0 800:10 1200:14" :wrap="false" class="h-full"></n-grid-item>
      <n-grid-item span="12 400:12 600:12 800:6 1200:4" :wrap="false" class="h-full">
        <n-space justify="end" align="center" :wrap="false" class="h-full">
          <n-switch v-model:value="isDark" size="large" @update:value="handleTheme" class="theme-switch">
            <template #checked-icon>
              <n-icon :component="MoonIcon" color="#ffe100" />
            </template>
            <template #unchecked-icon>
              <n-icon :component="SunIcon" color="rgb(241,100,0)" />
            </template>
          </n-switch>
          <n-dropdown :options="options" @select="handleDropDownSelect" @update:show="handleDropDownShow">
            <n-space justify="center" align="end" class="cursor-pointer group">
              <span class="text-lg font-mono">{{ userInfo.nickName }}</span>
              <n-icon size="24" :color="userInfo.gender === 1 ? '#7f6742' : '#f45097'">
                <svg-icon :icon="userInfo.gender === 1 ? 'pied-piper-hat' : 'ggshoes'"></svg-icon>
              </n-icon>
              <n-icon size="12" class="transition-transform" :class="handleDropIsShow ? 'transform rotate-45' : ''">
                <template v-if="!handleDropIsShow">
                  <CaretDownRight12Filled />
                </template>
                <template v-else>
                  <CaretDownRight12Regular />
                </template>
              </n-icon>
            </n-space>
          </n-dropdown>
          <n-avatar round :size="48" :src="userInfo.avatar" />
        </n-space>
      </n-grid-item>
    </n-grid>
  </header>
</template>

<script lang="ts" setup>
import { ref, h, Ref } from 'vue'
import type { Component } from 'vue'
import { NIcon, useDialog } from 'naive-ui'
import {
  Person12Regular as UserIcon,
  BoxEdit24Filled as EditIcon,
  SignOut24Regular as LogoutIcon,
  WeatherMoon48Filled as MoonIcon,
  WeatherSunnyHigh48Filled as SunIcon,
  CaretDownRight12Filled,
  CaretDownRight12Regular
} from '@vicons/fluent'
import logoPath from '@/assets/logo.png'
import useStore from '@/store/index'
const dialog = useDialog()
const { userStore, themeStore } = useStore()
const userInfo = userStore()
const themeOptions = themeStore()
// 切换夜间主题
const isDark: Ref<boolean> = ref(false)
const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}
const options = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: renderIcon(EditIcon)
  },
  {
    label: '退出登陆',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]

const logoRef = ref(logoPath)
const logo: string = logoRef.value

// 切换主题
function handleTheme(value: boolean) {
  themeOptions.isDarkTheme = value
  console.log('theme', themeOptions.isDarkTheme)
}

// 退出登陆
function logout() {
  userStore().Logout().then((response: any) => {
    console.log('message', response)
  }).catch((response) => {
    window.$message.error(response.data.message)
  })
}
// 触发下拉菜单 选择内容
function handleDropDownSelect(key: string) {
  console.log('dropKey', key)
  switch (key) {
    case 'logout':
      // 退出登陆
      dialog.warning({
        title: '提示',
        content: '确定退出吗？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
          logout()
        },
        onNegativeClick: () => {
          window.$message.success('已取消')
        }
      })
      break;
  }
}

const handleDropIsShowRef = ref(false)
let handleDropIsShow: boolean = handleDropIsShowRef.value
// 触发下拉菜单 显示状态
function handleDropDownShow(value: boolean) {
  handleDropIsShow = value
}
</script>

<style lang="scss" scoped>
.switch-theme {
  .n-switch.n-switch--active .n-switch__rail {
    background-color: white;
  }
}
</style>