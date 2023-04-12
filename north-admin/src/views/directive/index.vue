<template>
  <div>
    <n-card title="动效按钮系列">
      <div class="w-full flex flex-wrap justify-around item-center">
        <div v-dyna-button:gradient>渐变按钮</div>
        <div v-dyna-button:progress>进度按钮</div>
        <div v-dyna-button:meteor class="shadow-xl" style="color: #35a2fd;">流光按钮</div>
        <div v-dyna-button:meteorHalf class="shadow-xl" style="color: #35a2fd;">半流光按钮</div>
        <div v-dyna-button:shake>
          摇晃按钮</div>
        <div v-dyna-button:glass style="background-color: #35a2fd;">
          玻璃按钮</div>
        <div v-dyna-button:wave style="background-image: linear-gradient(315deg, #43cea2, #185a9d);">
          波浪按钮</div>
        <div v-dyna-button:fly style="background-color: #35a2fd;">
          小飞机按钮</div>
      </div>
    </n-card>
  </div>
</template>