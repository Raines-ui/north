<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-14 10:15:06
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-14 10:48:32
 * @FilePath: \north\north-admin\src\views\error\404.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container w-full h-full bg-white">
    <div id="svgContainer" ref="lottieRef"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import lottie from "lottie-web";
const props = defineProps({
  src: {
    type: Object,
    default: ()=>{},
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
const lottieBox = ref(null);
onMounted(() => {
  if (lottieBox.value) {
    const animation = lottie.loadAnimation({
      container: lottieBox.value,
      renderer: "svg", // 渲染方式:svg：支持交互、不会失帧、canvas、html：支持3D，支持交互
      loop: props.loop, // 循环播放，默认：true
      autoplay: props.autoplay, // 自动播放 ，默认true
      path: props.path,//网络路径
      animationData: Object.keys(props.src).length == 0 ? "" : props.src,//本地路径，优先级更高
    });
  }
});
</script>

<style lang="scss">
  #svgContainer {
            width: 640px;
            height: 512px;
            background-color: white;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            }
</style>