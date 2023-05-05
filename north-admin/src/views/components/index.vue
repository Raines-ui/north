<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-27 10:26:58
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-05-05 10:24:22
 * @FilePath: \north\north-admin\src\views\components\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <n-card title="上传组件">
      <div class="w-full flex flex-wrap justify-around item-center">
        <div class="flex flex-col justify-center item-start flex-1">
          <ImageUpload></ImageUpload>
          <span class="w-full inline-block font-bold italic py-4">图片上传组件</span>
        </div>
        <div class="flex flex-col justify-start item-center flex-1">
          <FileUpload ref="fileUploadRef" v-model:value="url" :fileType="['pdf']" :fileSize="1" :isAutoUpload="false"></FileUpload>
          <span class="w-full inline-block font-bold italic py-4">文件上传组件</span>
        </div>
        <n-button @click="updateData" class="mx-2">更新数据{{ fileData }}</n-button>
        <n-button @click="getUrl" class="mx-2">查看数据</n-button>
        <n-button @click="handleSubmit" class="mx-2">提交数据</n-button>
      </div>
    </n-card>
  </div>
</template>
<script lang="ts" setup>
import ImageUpload from '@/components/ImageUpload/index.vue'
import FileUpload from '@/components/FileUpload/index.vue'
import { onMounted, reactive, ref } from 'vue'
let fileData = reactive<any>({ name: null, type: null })
let url = ref<any>(null)
const fileUploadRef = ref<null | HTMLElement>(null)
function updateData() {
  // fileData.name = '数据'
  // fileData.type = 'file'
  url.value = 'https://pic.616pic.com/ys_b_img/00/06/20/novPzrqvE3.jpg,https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1682685797208-c741d58c2eff,https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1681325655883-14885bd9cd93'
  console.log(url.value)
}
function getUrl(){
  console.log('getUrl', url.value)
}

function handleSubmit(){
  console.log('getUrl', url.value)
  fileUploadRef.value?.handleUpload()
}

onMounted(()=>{
  console.log('mounted', fileUploadRef)
})
</script>