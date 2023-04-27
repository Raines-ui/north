<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-26 15:33:49
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-27 16:45:10
 * @FilePath: \north\north-admin\src\components\FileUpload\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <n-upload multiple :action="uploadAction" v-model:data="fileData" :disabled="disabled" :headers="headers" :max="max"
      @change="handleChange" @error="handleError" @finish="handleFinish" @before-upload="handleUploadBefore" :file-list="fileList"
      @remove="handleRemove">
      <n-button>{{ btnTitle }}</n-button>
    </n-upload>
  </div>
</template>
<script lang="ts" setup>
import { UploadFileInfo } from 'naive-ui'
import { GET_TOKEN } from '@/utils/auth'
import { ref, watch } from 'vue'
const props = defineProps({
  // 按钮标题
  btnTitle: {
    type: String,
    default: '上传文件'
  },
  // 上传地址
  uploadAction: {
    type: String,
    default: 'https://www.mocky.io/v2/5e4bafc63100007100d8b70f'
  },
  // 附加数据
  data: {
    type: Object,
    default: () => ({})
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 文件数量
  max: {
    type: Number,
    default: 5
  }
})
const headers = ref<Object>({
  'Admin-Token': 'Bearer ' + GET_TOKEN()
})
let fileData = ref(props.data)
const fileList = ref<any>([])
console.log('fileData', fileData)
watch(props.data, (newVal, oldVal) => {
  console.log('watch', newVal, oldVal)
  fileData.value = newVal
  console.log('fileData.value',fileData.value)
}, { deep: true, immediate: true })
// 组件发生变化
function handleChange(file: UploadFileInfo, fileList: Array<UploadFileInfo>, event?: Event) {
  console.log('组件发生变化', file, fileList, event)
}
// 文件上传之前
function handleUploadBefore(file: UploadFileInfo, fileList: Array<UploadFileInfo>) {
  console.log('文件上传之前', file, fileList)
  console.log('列表', fileList)
}
// 文件上传结束
function handleFinish(file: UploadFileInfo, event?: ProgressEvent) {
  console.log('文件上传结束', file, event)
}
// 删除文件
function handleRemove(file: UploadFileInfo, fileList: Array<UploadFileInfo>) {
  console.log('删除文件', file, fileList)
}
// 文件上传失败
function handleError(file: UploadFileInfo, event?: ProgressEvent) {
  console.log('文件上传失败', file, event)
}
</script>