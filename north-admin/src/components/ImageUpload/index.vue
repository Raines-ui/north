<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-26 15:33:24
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-05-09 15:33:48
 * @FilePath: \north\north-admin\src\components\ImageUpload\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-26 15:33:24
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-27 10:25:48
 * @FilePath: \north\north-admin\src\components\ImageUpload\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <n-upload ref="uploadRef" :default-upload="isAutoUpload" multiple :action="uploadAction" v-model:data="fileData"
      :disabled="isDisabled" :show-remove-button="true" :headers="headers" :max="max" list-type="image-card" :default-file-list="fileList" @error="handleError"
      @finish="handleFinish" @before-upload="handleUploadBefore">
    </n-upload>
  </div>
</template>

<script lang="ts" setup>
import type { UploadFileInfo, UploadInst } from 'naive-ui'
import { GET_TOKEN } from '@/utils/auth'
import { isExternal } from '@/utils/validate'
import { ref, watch, defineEmits, getCurrentInstance, ComponentInternalInstance } from 'vue'
interface IOptions {
  file: UploadFileInfo,
  fileList: Array<UploadFileInfo>,
  event?: ProgressEvent
}
const { proxy } = getCurrentInstance() as ComponentInternalInstance
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
    default: 'http://localhost:1000/upload'
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
  },
  // 是否取消自动上传
  isAutoUpload: {
    type: Boolean,
    default: true
  }
})

const headers = ref<Object>({
  'Admin-Token': 'Bearer ' + GET_TOKEN()
})
let fileData = ref<Object>(props.data)
// 当前文件数量
let fileNum = 0
// 是否禁用按钮
let isDisabled = ref<boolean>(false)
const emit = defineEmits(["update:value"])
const uploadRef = ref<UploadInst | null>(null)
let fileList = ref<UploadFileInfo[]>([])
watch([() => props.value, props.data], ([newVal, newData], [oldVal, oldData]) => {
  fileData.value = newData
  if (newVal) {
    console.log('watching')
    // 首先将值转为数组
    const list = Array.isArray(newVal) ? newVal : newVal.split(',');
    fileList.value = list.map((item :string, index: number) => {
      return {
        name: item,
        url: item,
        status: 'finished',
      }
    })
    console.log('fileList', fileList.value)
    // 修改文件数量
    fileNum = fileList.value.length
    console.log('数量：', fileNum)
  }
}, { deep: true, immediate: true })

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
  fileNum = fileList.value.length + 1
  // console.log('fileNum', fileNum)
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

// 更新文件列表
function updateFileList() {
  console.log('updateFileList...', fileList.value)
  emit("update:value", fileList.value.length > 0 ? fileList.value.map(item => item.url).join(',') : null)
  proxy!.$forceUpdate()
}

// 文件上传之前
function handleUploadBefore(options: IOptions) {
  console.log('上传前...', options)
  // 需要使用Promise返回，直接返回false，无法打断上传
  return new Promise((resolve, reject) => {
    isDisabled.value = true
    if (!checkFileType(options.file.fullPath)) {
      window.$message.warning('文件格式错误！')
      return reject(false)
    }
    if (!checkFileNum()) {
      window.$message.warning('文件数量已达上限！')
      return reject(false)
    }
    if (!checkFileSize(options.file.file?.size)) {
      window.$message.warning(`文件大小不能超过${props.fileSize}MB！`)
      return reject(false)
    }
    return resolve(true)
  })
}

// 文件上传结束
function handleFinish(options: IOptions) {
  console.log('上传结束...', options)
  console.log('上传结束文件列表...', fileList.value)
  const target = options.event?.target as XMLHttpRequest
  const file = options.file
  // 使用前请关闭mock
  if(!target?.response){
    window.$notification.error({
    content:'上传失败',
    duration: 2500,
    placement: 'top',
    keepAliveOnHover: true
  })
    return
  }
  const result: any = JSON.parse(target.response)
  console.log(`${props.uploadAction}接口的返回结果：\n`, result)
  fileList.value.unshift({
    id: file.id,
    name: result?.data,
    url: result?.data,
    status: 'finished'
  })
  updateFileList()
  window.$notification.success({
    content: result.message ? result.message : '上传成功',
    duration: 2500,
    placement: 'top',
    keepAliveOnHover: true
  })
}

// 文件上传失败
function handleError(options: IOptions) {
  console.log('上传失败...', options)
  console.log('上传失败文件列表...', fileList.value)
  window.$notification.error({
    content:'上传失败',
    duration: 2500,
    placement: 'top',
    keepAliveOnHover: true
  })
  updateFileList()
}
</script>