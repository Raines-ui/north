<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-26 15:33:49
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-28 17:15:29
 * @FilePath: \north\north-admin\src\components\FileUpload\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-26 15:33:49
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-28 11:39:03
 * @FilePath: \north\north-admin\src\components\FileUpload\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <n-upload multiple :action="uploadAction" :file-list="myFileList" :show-file-list="false" v-model:data="fileData"
      :disabled="disabled" :headers="headers" :max="max" @change="handleChange" @error="handleError"
      @finish="handleFinish" @before-upload="handleUploadBefore" @remove="handleRemove">
      <n-button>{{ btnTitle }}</n-button>
    </n-upload>
    <ul v-if="myFileList && myFileList.length > 0">
      <li v-for="(item, index) in myFileList" class="flex items-center p-2 border-box group cursor-pointer bg-transparent hover:bg-gray-100">
        <span>
          <svg-icon :icon="getFileExt(item)" />
        </span>
        <span class="pl-1 pr-5 border-box group-hover:text-blue-500">{{ item }}</span>
        <span class="opacity-0 text-blue-400 group-hover:opacity-100">
          <svg-icon icon="close" />
        </span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import type { UploadFileInfo, UploadSettledFileInfo } from 'naive-ui'
import { GET_TOKEN } from '@/utils/auth'
import { ref, watch } from 'vue'
interface IOptions {
  file: UploadFileInfo,
  fileList: Array<UploadFileInfo>,
  event?: Event
}
const props = defineProps({
  // 值
  value: [String, Array, Object],
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
let myFileList = ref<Array<string | null | undefined>>([])

watch([() => props.value, props.data], ([newVal, newData], [oldVal, oldData]) => {
  fileData.value = newData
  if (newVal) {
    // 首先将值转为数组
    const list = Array.isArray(newVal) ? newVal : newVal.split(',');
    myFileList.value = myFileList.value.concat(list)
  }
}, { deep: true, immediate: true })

// 获取文件扩展名
function getFileExt(fileName: string | null | undefined) {
  if (fileName) {
    const fileNameArr = fileName.split('.')
    const fileExt = fileNameArr[fileNameArr.length - 1].toUpperCase()
    return `offices-${isExistIcon(fileExt) ? fileExt : 'FILE'}`
  } else {
    return 'FILE'
  }
}

// 检测图标是否存在于文件夹中
function isExistIcon(iconName: string): boolean {
  // 获取静态资源下的所有SVG图标
  const officesIcons: object = import.meta.glob('@/assets/icons/svg/offices/*.svg', { eager: true })
  let isExist = false
  for (const key in officesIcons) {
    // 全字匹配
    const iconNameReg = new RegExp(iconName)
    if (iconNameReg.test(key)) {
      isExist = true
      break
    }
  }
  return isExist
}

// // 查询构建fileList
// function getFileList(){

// }

// 组件发生变化
function handleChange(options: IOptions) {
  console.log('组件发生变化', options)
  myFileList.value = options.fileList.map(item => item.fullPath)
  console.log('myFileList', myFileList.value)
}

// 文件上传之前
function handleUploadBefore(options: IOptions) {
  console.log('文件上传之前', options)
  console.log('列表', options.fileList)
}

// 文件上传结束
function handleFinish(options: IOptions) {
  console.log('文件上传结束', options)
}

// 删除文件
function handleRemove(options: IOptions) {
  console.log('删除文件', options)
}

// 文件上传失败
function handleError(options: IOptions) {
  console.log('文件上传失败', options)
}
</script>