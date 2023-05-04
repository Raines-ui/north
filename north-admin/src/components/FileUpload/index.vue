<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-26 15:33:49
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-05-04 16:31:03
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
    <n-upload multiple :action="uploadAction" :show-file-list="false" v-model:data="fileData" :disabled="isDisabled"
      :headers="headers" :max="max" @error="handleError" @finish="handleFinish" @before-upload="handleUploadBefore">
      <n-button class="uploadButton"><n-spin v-show="isUpload" :size="12"></n-spin>{{ btnTitle }}</n-button>
    </n-upload>
    <ul v-if="myFileList && myFileList.length > 0">
      <n-scrollbar style="max-height: 120px">
        <li v-for="(item, index) in myFileList" :key="'file' + index"
          class="flex items-center p-2 border-box group cursor-pointer bg-transparent hover:bg-gray-100"
          @click="handlePreview(item)">
          <span>
            <svg-icon :icon="getFileExt(item)" />
          </span>
          <span class="pl-1 pr-5 border-box group-hover:text-blue-500 truncate ..." :title="item ? item : ''">{{ item
          }}</span>
          <span class="opacity-0 text-blue-400 group-hover:opacity-100" @click.stop="deleteFile(index)">
            <svg-icon icon="close" />
          </span>
        </li>
      </n-scrollbar>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import type { UploadFileInfo, UploadSettledFileInfo } from 'naive-ui'
import { GET_TOKEN } from '@/utils/auth'
import { ref, watch, defineEmits } from 'vue'
interface IOptions {
  file: UploadFileInfo,
  fileList: Array<UploadFileInfo>,
  event?: Event
}
const props = defineProps({
  // 值
  value: [String, Array, Object],
  // 按钮标题
  title: {
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
  },
  // 文件类型 统一小写
  fileType: {
    type: Array,
    default: () => ([])
  },
  // 文件大小 以MB为单位
  fileSize: {
    type: Number,
    default: 10
  }
})
const headers = ref<Object>({
  'Admin-Token': 'Bearer ' + GET_TOKEN()
})
let fileData = ref<Object>(props.data)
let myFileList = ref<Array<string | null | undefined>>([])
// 按钮标题
let btnTitle = ref<string>(props.title)
// 当前文件数量
let fileNum = 0
// 是否显示loading
let isUpload = ref<boolean>(false)
// 是否禁用按钮
let isDisabled = ref<boolean>(false)
const emit = defineEmits(["update:value"])

watch([() => props.value, props.data], ([newVal, newData], [oldVal, oldData]) => {
  fileData.value = newData
  if (newVal) {
    console.log('watching')
    // 首先将值转为数组
    const list = Array.isArray(newVal) ? newVal : newVal.split(',');
    myFileList.value = list
    // 修改文件数量
    fileNum += list.length
  }
}, { deep: true, immediate: true })

/**
 * 获取文件扩展名
 * @param {文件地址} fileName 
 */
function getFileExt(fileName: string | null | undefined) {
  if (fileName) {
    const fileNameArr = fileName.split('.')
    const fileExt = fileNameArr[fileNameArr.length - 1].toUpperCase()
    return `offices-${isExistIcon(fileExt) ? fileExt : 'FILE'}`
  } else {
    return 'FILE'
  }
}

/**
 * 检测图标是否存在于本地文件夹中
 * @param {图标名称} iconName 
 */
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

/**
 * 校验上传文件格式
 * @param {文件地址} file 
 */
function checkFileType(file: string | null | undefined): boolean {
  if (file) {
    const fileNameArr = file.split('.')
    const fileExt = fileNameArr[fileNameArr.length - 1].toLowerCase()
    // 存在文件类型限制
    if (props.fileType.length > 0 && fileExt) {
      return props.fileType.indexOf(fileExt) != -1
    }
    return true
  }
  return false
}

// 校验文件数量
function checkFileNum(): boolean {
  console.log('myFileList.value', myFileList.value)
  fileNum = myFileList.value.length + 1
  console.log('fileNum', fileNum)
  return fileNum <= props.max
}

/**
 * 判断文件大小
 * @param {当前文件大小} size 
 */
function checkFileSize(size: number | undefined): boolean {
  if (size) {
    return size / 1024 / 1024 < props.fileSize
  } else {
    return false
  }
}

// 重置上传状态
function resetUpload() {
  isUpload.value = false
  btnTitle.value = props.title
  isDisabled.value = props.disabled
}

// 文件上传之前
function handleUploadBefore(options: IOptions) {
  // 需要使用Promise返回，直接返回false，无法打断上传
  return new Promise((resolve, reject) => {
    console.log('文件上传之前', options)
    console.log('列表', options.fileList)
    isUpload.value = true
    btnTitle.value = '上传中...'
    isDisabled.value = true
    if (!checkFileType(options.file.fullPath)) {
      window.$message.warning('文件格式错误！')
      resetUpload()
      return reject(false)
    }
    if (!checkFileNum()) {
      window.$message.warning('文件数量已达上限！')
      resetUpload()
      return reject(false)
    }
    if (!checkFileSize(options.file.file?.size)) {
      window.$message.warning(`文件大小不能超过${props.fileSize}MB！`)
      resetUpload()
      return reject(false)
    }
    // 临时 应该放在上传成功逻辑中
    myFileList.value.unshift(options.file.fullPath)
    updateFileList()
    setTimeout(() => {
      resetUpload()
    }, 3000)
    return resolve(true)
  })
}

// 文件上传结束
function handleFinish(options: IOptions) {
  console.log('文件上传结束', options)
  resetUpload()
  updateFileList()
}

/**
 * 文件预览
 * @param {预览地址} url 
 */
function handlePreview(url: string | null | undefined) {
  if (!url) {
    window.$message.error('预览地址不能为空!')
    return
  }
  window.open(url, 'newwindow')
}

/**
 * 删除文件
 * @param {文件索引值} index 
 */
function deleteFile(index: number) {
  myFileList.value.splice(index, 1)
  fileNum = myFileList.value.length
  updateFileList()
}

// 文件上传失败
function handleError(options: IOptions) {
  console.log('文件上传失败', options)
  resetUpload()
  updateFileList()
}

// 更新文件列表
function updateFileList() {
  emit("update:value", myFileList.value.length > 0 ? myFileList.value.join(',') : null)
}
</script>
<style lang="scss" scoped>
.uploadButton {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>