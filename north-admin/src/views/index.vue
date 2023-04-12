<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-28 14:04:44
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-12 11:49:06
 * @FilePath: \north\north-admin\src\views\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-28 14:04:44
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-31 18:05:37
 * @FilePath: \north\north-admin\src\views\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts">
import { getMessageList } from '@/api/user/home'
import Pagination from '@/components/Pagination/index.vue'
import { defineComponent, reactive, ref, onMounted, h } from 'vue'
import type { Component } from 'vue'
import { NIcon, useDialog } from 'naive-ui'
import {
  Person12Regular as UserIcon,
  BoxEdit24Filled as EditIcon,
  SignOut24Regular as LogoutIcon,
  CaretDownRight12Filled,
  CaretDownRight12Regular
} from '@vicons/fluent'
import { IRefData } from '@/interfaces/views/index'
import logo from '@/assets/logo.png'
import useStore from '@/store/index'
export default defineComponent({
  components: {
    CaretDownRight12Filled,
    CaretDownRight12Regular,
    Pagination
  },
  setup() {
    const dialog = useDialog()
    const { userStore } = useStore()
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

    const userInfo = userStore()
    const refData: IRefData = reactive({
      messageList: reactive([]),
      total: ref(0),
      pageCount: ref(0),
      listQuery: reactive({
        page: 1,
        limit: 10
      }),
      loading: ref(false),
      handleDropDownShow: ref(false)
    })

    const unrefData = {
      tableColumns: [
        {
          title: '序号',
          key: 'key',
          align: 'center',
          width: 80,
          render: (_: object, index: number) => {
            return `${index + 1}`
          }
        },
        {
          title: '消息ID',
          key: 'id',
          align: 'center'
        },
        {
          title: '发送人',
          key: 'name',
          align: 'center'
        },
        {
          title: '发送内容',
          key: 'content',
          align: 'center',
          width: 200,
          ellipsis: {
            tooltip: true
          }
        },
        {
          title: '发送时间',
          key: 'createTime',
          align: 'center'
        }
      ],
      logo: logo
    }
    const Methods = {
      // 查询列表
      handlePagination: (params: any) => {
        console.log('params', params)
        refData.listQuery.page = params?.page
        refData.listQuery.limit = params?.limit
        Methods.getList()
      },
      // 列表查询
      getList: () => {
        console.log('refData.listQuery', refData.listQuery)
        refData.loading = true
        getMessageList(refData.listQuery).then((response: any) => {
          refData.loading = false
          refData.messageList = response.data.result
          refData.pageCount = response.data.pageCount
          refData.total = response.data.total
        })
      },
      // 退出登陆
      logout: () => {
        userStore().Logout().then((response: any) => {
          console.log('message', response)
        }).catch((response) => {
          window.$message.error(response.data.message)
        })
      },
      // 触发下拉菜单 选择内容
      handleDropDownSelect: (key: string) => {
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
                Methods.logout()
              },
              onNegativeClick: () => {
                window.$message.success('已取消')
              }
            })
            break;
        }
      },
      // 触发下拉菜单 显示状态
      handleDropDownShow: (value: boolean) => {
        refData.handleDropDownShow = value
      },
      updateLimit(e: any) {
        console.log('updateLimit', e)
        refData.listQuery.limit = e
        console.log('updateLimit', refData.listQuery.limit)
        Methods.getList()
      }
    }
    onMounted(() => {
      Methods.getList()
    })
    return {
      refData,
      Methods,
      options,
      userInfo,
      unrefData,
      CaretDownRight12Filled,
      CaretDownRight12Regular,
      Pagination
    }
  }
})
</script>
<template>
  <div>
    <div class="p-6">
      <div class="truncate w-60 h-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        repellendus odit pariatur dolorum molestias possimus. Quam excepturi, quo
        molestiae est culpa sapiente accusamus perspiciatis maiores magnam? Aut
        nesciunt ipsam commodi!
      </div>
      <n-space class="py-6">
        <n-button @click="Methods.getList">获取mock数据</n-button>
      </n-space>
      <n-data-table :loading="refData.loading" :columns="unrefData.tableColumns" :data="refData.messageList"
        style="height: 300px;" flex-height />
      <Pagination v-model:page="refData.listQuery.page" v-model:limit="refData.listQuery.limit"
        :pageCount="refData.pageCount" :total="refData.total" @pagination="Methods.getList" />
    </div>
  </div>
</template>