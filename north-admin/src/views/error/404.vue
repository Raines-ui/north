<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-14 10:15:06
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-14 16:58:38
 * @FilePath: \north\north-admin\src\views\error\404.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-14 10:15:06
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-14 14:23:37
 * @FilePath: \north\north-admin\src\views\error\404.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-screen h-screen bg-white">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="text-center">
        <div style="color:#541C05;" class="font-bold text-xl mb-8">
          槽糕！您访问的页面不在火星上，请回地球吧~
        </div>
        <router-link to="/" style="display: inline-block;">
          <div v-dyna-button:meteor="{ 'active_color': '#541C05' }" style="color:#541C05;" class="font-bold bullshit-btn">
            <!-- <div style="width: 28px;height: 28px; margin-right: 10px;">
                <LottieAnimate :src="rocketIcon" />
              </div>  -->
            <n-icon size="22" color="#541C05" class="rocket-icon">
              <rocket-icon />
            </n-icon>
            回到首页
          </div>
        </router-link>
      </div>
      <div id="svgContainer" class="flex justify-end items-center flex-col">
        <LottieAnimate :src="animationData" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import animationData from '@/static/lottie/404.json';
import LottieAnimate from '@/components/LottieAnimate/index.vue';
import { Rocket20Filled as RocketIcon } from '@vicons/fluent'
</script>

<style lang="scss" scoped>
#svgContainer {
  width: 640px;
  height: 512px;
  background-color: white;
}

.bullshit-btn {
  overflow: unset;

  &:hover .rocket-icon {
    offset-path: path('M 10,10 L100,-15');
    animation: fly 1.2s forwards ease-in-out;
  }
}

.rocket-icon {
  margin-right: 10px;
}


@keyframes fly {
  from {
    offset-distance: 0;
    transform: scale(1);
    position: static;
  }

  to {
    offset-distance: 100%;
    transform: scale(0);
    position: absolute;
  }
}</style>