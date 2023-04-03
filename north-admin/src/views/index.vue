<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-28 14:04:44
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-03 10:00:36
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
import { defineComponent, reactive, ref, onMounted, h } from 'vue'
import type { Component } from 'vue'
import { NIcon, useDialog  } from 'naive-ui'
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
import Header from '@/layout/header.vue'
export default defineComponent({
  components: {
    CaretDownRight12Filled,
    CaretDownRight12Regular,
    Header
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
      listQuery: reactive({
        page:3,
        size:10
      }),
      loading:ref(false),
      handleDropDownShow:ref(false)
    })

    const unrefData = {
      tableColumns: [
        {
          title:'消息ID',
          key:'id'
        },
        {
          title:'发送人',
          key:'name'
        },
        {
          title:'发送内容',
          key:'content',
          width: 200,
          ellipsis: {
            tooltip: true
          }
        },
        {
          title:'发送时间',
          key:'createTime'
        }
     ],
     pageSizes: [
        {
          label: '10/页',
          value: 10
        },
        {
          label: '20/页',
          value: 20
        },
        {
          label: '30/页',
          value: 30
        },
        {
          label: '40/页',
          value: 40
        }
      ],
      logo:logo
    }
    const Methods = {
      // 列表查询
      getList:() => {
        refData.loading = true
        getMessageList(refData.listQuery).then((response: any) => {
          console.log('result', response.data)
          refData.loading = false
          refData.messageList = response.data.result
          refData.total = response.data.total
        })
      },
      // 当前页回调发生变化
      onPageChange: (page:number) => {
        refData.listQuery.page = page
        Methods.getList()
      },
      // 当前分页大小发生变化
      onPageSizeChange: (pageSize:number) => {
        refData.listQuery.size = pageSize
        Methods.getList()
      },
      // 退出登陆
      logout:()=>{
        userStore().Logout().then((response: any)=>{
              console.log('message',response)
            }).catch((response)=>{
              window.$message.error(response.data.message)
        })
      },
      // 触发下拉菜单 选择内容
      handleDropDownSelect: (key:string) => {
        console.log('dropKey',key)
        switch (key) {
          case 'logout' :
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
      handleDropDownShow: (value:boolean) => {
        refData.handleDropDownShow = value
      }
    }
    onMounted(()=>{
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
      Header
    }
  }
})
</script>
<template>
  <div class="w-full h-full">
    <Header></Header>
    <div class="p-6">
    <div class="truncate w-60 h-20">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
      repellendus odit pariatur dolorum molestias possimus. Quam excepturi, quo
      molestiae est culpa sapiente accusamus perspiciatis maiores magnam? Aut
      nesciunt ipsam commodi!
    </div>
    <n-space>
      <n-button @click="Methods.getList">获取mock数据</n-button>
    </n-space>
    <n-spin :show="refData.loading">
      <n-data-table :columns="unrefData.tableColumns" :data="refData.messageList" style="height: 300px;" flex-height />
      <n-pagination 
        class="my-10px"
        show-size-picker
        :page-sizes="unrefData.pageSizes"
        :page="refData.listQuery.page"
        :page-size="refData.listQuery.size"
        :page-count="refData.total"
        @update:page="Methods.onPageChange"
        @update:pageSize="Methods.onPageSizeChange"/>
    </n-spin>
  </div>
  </div>
</template>