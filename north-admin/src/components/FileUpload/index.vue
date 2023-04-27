<template>
  <div>
    <n-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="defaultFileList"
  >
    <n-button>上传文件</n-button>
  </n-upload>
  </div>
</template>
<script lang="ts" setup>
import { UploadFileInfo } from 'naive-ui'
const defaultFileList: UploadFileInfo[] = [
      {
        id: 'razars',
        name: '刀',
        status: 'finished'
      },
      {
        id: 'edge',
        name: '锋',
        status: 'finished'
      }
    ]
</script>