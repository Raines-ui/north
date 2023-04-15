<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-14 10:15:06
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-15 10:59:20
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
  <div class="w-screen h-screen bullshit-container">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="ribbon"></div>
      <div class="text-center">
        <div style="color: #541c05" class="font-bold text-xl mb-8">
          槽糕！您访问的页面不在火星上，请回地球吧~
        </div>
        <router-link to="/" style="display: inline-block">
          <div
            v-dyna-button:meteor="{ active_color: '#541C05' }"
            style="color: #541c05"
            class="font-bold bullshit-btn"
          >
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
import animationData from '@/static/lottie/404.json'
import LottieAnimate from '@/components/LottieAnimate/index.vue'
import { Rocket20Filled as RocketIcon } from '@vicons/fluent'
</script>

<style lang="scss" scoped>
.bullshit-container {
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ffffff,
    #ece9e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    145deg,
    #f2ecec 0,
    #ffffff 15%,
    #ffffff 80%,
    #f2ecec 90%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  position: relative;
  .ribbon {
    position: fixed;
    right: 0;
    top: 0;
    text-align: center;
    box-sizing: border-box;
    border-left: 80px solid transparent;
    border-right: 80px solid #541c0590;
    border-top: 80px solid #541c0590;
    border-bottom: 80px solid transparent;
    &::after {
      content: '404';
      position: fixed;
      top: 5px;
      right: 5px;
      width: 80px;
      height: 80px;
      line-height: 80px;
      color: #FFFFFF;
      font-size: 42px;
      font-weight: bold;
      display: inline-block;
      transform: rotate(45deg);
      transform-origin: center;
    }
  }
  #svgContainer {
    width: 640px;
    height: 512px;
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
  }
}
</style>
