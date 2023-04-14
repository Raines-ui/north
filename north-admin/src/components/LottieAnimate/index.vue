<template>
   <div ref="lottieRef" class="lottieContainer"></div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import lottie from "lottie-web";
const props = defineProps({
  src: {
    type: Object,
    default: () => { },
  },
  path: {
    type: String,
    default: "",
  },
  loop: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
});
const lottieRef = ref(null);
onMounted(() => {
  if (lottieRef.value) {
    const animation = lottie.loadAnimation({
      container: lottieRef.value ,
      renderer: "svg" , // 渲染方式:svg：支持交互、不会失帧、canvas、html：支持3D，支持交互
      loop: props.loop , // 循环播放，默认：true
      autoplay: props.autoplay , // 自动播放 ，默认true
      path: props.path ,//网络路径
      animationData: Object.keys(props.src).length == 0 ? "" : props.src//本地路径，优先级更高
    });
  }
});
</script>

<style lang="scss" scoped>
  .lottieContainer{
    width: 100%;
    height: 100%;
  }
</style>