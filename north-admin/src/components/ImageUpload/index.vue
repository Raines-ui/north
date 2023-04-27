<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-26 15:33:24
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-27 10:54:08
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
    <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :default-file-list="fileList"
      list-type="image-card">
      点击上传
    </n-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UploadFileInfo } from 'naive-ui'

const showModalRef = ref(false)
const previewImageUrlRef = ref('')
function handlePreview(file: UploadFileInfo) {
  const { url } = file
  previewImageUrlRef.value = url as string
  showModalRef.value = true
}
const fileList = ref<UploadFileInfo[]>([
  {
    id: 'a',
    name: '我是上传出错的普通文件.png',
    status: 'error'
  },
  {
    id: 'b',
    name: '我是普通文本.doc',
    status: 'finished',
    type: 'text/plain'
  },
  {
    id: 'c',
    name: '我是自带url的图片.png',
    status: 'finished',
    url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    id: 'd',
    name: '我是上传进度99%的文本.doc',
    status: 'uploading',
    percentage: 99
  }
])
const previewFileList = ref<UploadFileInfo[]>([
  {
    id: 'react',
    name: '我是react.png',
    status: 'finished',
    url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    id: 'vue',
    name: '我是vue.png',
    status: 'finished',
    url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  }
])
</script>