<template>
  <div>
    <n-card title="上传组件">
      <div class="w-full flex flex-wrap justify-around item-center">
        <div class="flex flex-col justify-center item-start flex-1">
          <ImageUpload></ImageUpload>
          <span class="w-full inline-block font-bold italic py-4">图片上传组件</span>
        </div>
        <div class="flex flex-col justify-start item-center flex-1">
          <FileUpload></FileUpload>
          <span class="w-full inline-block font-bold italic py-4">文件上传组件</span>
        </div>
      </div>
    </n-card>
  </div>
</template>
<script lang="ts" setup>
import ImageUpload from '@/components/ImageUpload/index.vue'
import FileUpload from '@/components/FileUpload/index.vue'
</script>