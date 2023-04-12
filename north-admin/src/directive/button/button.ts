/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-04-11 11:29:37
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-12 17:50:46
 * @FilePath: \north\north-admin\src\directive\button\button.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { effect, ObjectDirective } from 'vue'
import { getElementToPageTop, getElementToPageLeft } from '@/utils/index'
import './button.css'
const DyncButton: ObjectDirective = {
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding) {
    console.log('dir--mounted--el', el)
    console.log('dir--mounted--binding', binding)
    switch (binding.arg) {
      case 'gradient':
        // 渐变效果按钮
        gradientFn(el, binding)
        break
      case 'progress':
        // 进度效果按钮
        progressFn(el, binding)
        break
      case 'meteor':
        // 流光效果按钮
        meteorFn(el, binding)
        break
      case 'meteorHalf':
        // 半流光效果按钮
        meteorHalfFn(el, binding)
        break
      case 'shake':
        // 摇晃效果按钮
        shakeFn(el, binding)
        break
      case 'glass':
        // 玻璃效果按钮
        glassFn(el, binding)
        break
      case 'wave':
        // 波浪效果按钮
        waveFn(el, binding)
        break
      case 'fly':
        // 飞行路径效果按钮
        flyFn(el, binding)
        break
    }
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding) {
    console.log('dir--updated', el)
    console.log('dir--mounted--binding', binding)
    switch (binding.arg) {
      case 'gradient':
        gradientFn(el, binding)
        break
      case 'progress':
        progressFn(el, binding)
        break
      case 'meteor':
        // 流光效果按钮
        meteorFn(el, binding)
        break
      case 'meteorHalf':
        // 半流光效果按钮
        meteorHalfFn(el, binding)
        break
      case 'shake':
        // 摇晃效果按钮
        shakeFn(el, binding)
        break
      case 'glass':
        // 玻璃效果按钮
        glassFn(el, binding)
        break
      case 'wave':
        // 波浪效果按钮
        waveFn(el, binding)
        break
      case 'fly':
        // 飞行路径效果按钮
        flyFn(el, binding)
        break
    }
  },
}

function gradientFn(el: any, binding: any) {
  el.className += ' north__default_btn north__gradient_btn'
  let gradient_colors = ['#d94cf8', '#35a2fd', '#d628fe'],
    gradientColorArr: Array<string> = []
  const gradient_values = ['3%', '50%', '100%'],
    gradient_values_lens = gradient_values.length

  if (
    binding.value?.gradient_colors &&
    Array.isArray(binding.value.gradient_colors) &&
    binding.value.gradient_colors.length > 0
  ) {
    gradient_colors =
      binding.value.gradient_colors.length > gradient_values_lens
        ? binding.value.gradient_colors.slice(0, gradient_values_lens)
        : binding.value.gradient_colors
  }
  gradient_colors.forEach((item, index) => {
    if (gradient_colors.length === 1) {
      gradientColorArr.push(`${item} 100%`)
    }
    gradientColorArr.push(`${item} ${gradient_values[index]}`)
  })
  el.style.setProperty('background-image', `radial-gradient(closest-side,${gradientColorArr.join(
    ','
  )})`, 'important')
}

function progressFn(el: any, binding: any) {
  el.className += ' north__default_btn north__progress_btn'
  let default_color = binding.value?.default_color ? binding.value.default_color : '#35a2fd',
    active_color = binding.value?.active_color ? binding.value.active_color : '#c635fe'
  el.style.setProperty('background-image', `linear-gradient(
      90deg,
      ${active_color} 50%,
      ${default_color} 0
    )`, 'important')
}

function meteorFn(el: any, binding: any) {
  el.className += ' north__default_btn north__meteor_btn'
  const active_color = binding.value?.active_color ? binding.value.active_color : '#35a2fd'
  el.style.setProperty('border-color', active_color, 'important')
  el.style.setProperty('border-width', '0px', 'important')
}

function meteorHalfFn(el: any, binding: any) {
  el.className += ' north__default_btn north__meteorHalf_btn'
  const active_color = binding.value?.active_color ? binding.value.active_color : '#35a2fd'
  el.style.setProperty('border-color', active_color, 'important')
  el.style.setProperty('border-width', '0px', 'important')
}

function shakeFn(el: any, binding: any) {
  el.className += ' north__default_btn north__shake_btn'
  const active_color = binding.value?.active_color ? binding.value.active_color : '#35a2fd'
  el.style.setProperty('background-color', active_color, 'important')
  el.style.setProperty('box-shadow', `0 10px 20px -10px ${active_color}`, 'important')
}

function glassFn(el: any, binding: any) {
  el.className += ' north__default_btn north__glass_btn'
}

function waveFn(el: any, binding: any) {
  el.className += ' north__default_btn north__wave_btn'
  const bubble = document.createElement("span")
  const elRectInfo = el.getBoundingClientRect()
  bubble.className += 'north__wave_bubble'
  el.appendChild(bubble)
  // 设置波纹宽度
  const bubble_width = elRectInfo.width > elRectInfo.height ? elRectInfo.width : elRectInfo.height
  const active_color = binding.value?.active_color ? binding.value.active_color : '#ffffff50'
  // 监听鼠标事件
  el.addEventListener('mouseenter', function (e: MouseEvent) {
    //当前鼠标位置
    // 无法保证用户使用哪个元素或标签，所以使用any类型
    const x = e.clientX - elRectInfo.left
    const y = e.clientY - elRectInfo.top
    bubble.style.left = x + 'px'
    bubble.style.top = y + 'px'
    bubble.style.backgroundColor = active_color
    bubble.style.width = bubble_width * 4 + 'px'
    bubble.style.height = bubble_width * 4 + 'px'
  })

  // 鼠标移出,移除波纹
  el.addEventListener('mouseleave', function (e: MouseEvent) {
    bubble.style.width = '0px'
    bubble.style.height = '0px'
  })
}

function flyFn(el: any, binding: any) {
  el.className += ' north__default_btn north__fly_btn'
}

export default DyncButton
