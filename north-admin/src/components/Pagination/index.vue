<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-07 14:51:44
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-10 15:47:21
 * @FilePath: \north\north-admin\src\components\Pagination\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="flex flex-row flex-nowrap justify-between item-center my-10px">
    <n-pagination class="flex-1" show-size-picker :page-sizes="pageSizes" v-model:page="currentPage" v-model:page-size="size"
      :page-count="pageCount" @update:page="onPageChange" @update:pageSize="onPageSizeChange" />
    <span style="color: var(--n-text-color);">共 <b style="color: var(--primary-color);">{{ total }}</b> 条数据</span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const emits = defineEmits(['pagination','update:limit','update:page'])
const props = defineProps({
  // 切换每页展示条数
  pageSizes: {
    type: Array,
    default: [
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
    ]
  },
  // 当前页数
  page: {
    type: Number,
    default: 1
  },
  // 每页条数
  limit: {
    type: Number,
    default: 10
  },
  // 总数量
  total: {
    type: Number,
    default: 0
  },
  // 总页数
  pageCount: Number
})

// 每页条数
let size = computed({
  get(){
    return props.limit
  },
  set(value){
    emits('update:limit',value)
  }
})

// 当前页数
let currentPage = computed({
  get(){
    return props.page
  },
  set(value){
    emits('update:page',value)
  }
})

// 当前页回调发生变化
function onPageChange(page: number) {
  emits('pagination',{ page: page, limit: size.value })
}
// 当前分页大小发生变化
function onPageSizeChange(pageSize: number) {
  // 判断当前分页大小是否大于数据总数
  if(pageSize * (currentPage.value - 1) >= props.total ){
    currentPage.value = Math.ceil(props.total / pageSize)
  }
  emits('pagination',{ page: currentPage.value, limit: pageSize })
}
</script>