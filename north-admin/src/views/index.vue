<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { getMessageList } from '@/api/user/home'
import { Airplane24Filled, AnimalRabbit24Regular } from '@vicons/fluent'
import { defineComponent, reactive, ref, onMounted } from 'vue'
import useUserStore from '@/store/modules/user'
export default defineComponent({
  setup() {
    interface IMessage {
      id?: string
      name?: string
      content?: string
      createTime?: string
    }
    interface IQuery{
      page:number,
      size:number
    }
    interface IRefData {
      messageList:Array<IMessage>,
      total:number,
      listQuery:IQuery
      loading:boolean
    }
    const refData: IRefData = reactive({
      messageList: reactive([]),
      total: ref(0),
      listQuery: reactive({
        page:3,
        size:10
      }),
      loading:ref(false)
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
      ]
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
      onPageChange(page:number){
        refData.listQuery.page = page
        Methods.getList()
      },
      // 当前分页大小发生变化
      onPageSizeChange(pageSize:number){
        refData.listQuery.size = pageSize
        Methods.getList()
      }
    }
    onMounted(()=>{
      console.log('INDEX__token',useUserStore().token)
      console.log('INDEX__username',useUserStore().username)
      console.log('INDEX__uid',useUserStore().uid)
      Methods.getList()
    })
    return {
      refData,
      Methods,
      unrefData
    }
  }
})
</script>
<template>
  <div>
    <div>
    <div class="truncate w-60 h-20">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
      repellendus odit pariatur dolorum molestias possimus. Quam excepturi, quo
      molestiae est culpa sapiente accusamus perspiciatis maiores magnam? Aut
      nesciunt ipsam commodi!
    </div>
    <n-space>
      <n-button @click="Methods.getList">获取mock数据</n-button>
    </n-space>
    <n-space>
      <n-icon size="40" color="#0e7a0d">
        <Airplane24Filled />
      </n-icon>
      <n-icon size="30" color="red">
        <AnimalRabbit24Regular />
      </n-icon>
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
  <HelloWorld msg="Vite + Vue" />
  </div>
</template>