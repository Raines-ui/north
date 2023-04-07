/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-02-17 13:46:07
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-31 10:35:56
 * @FilePath: \north\north-admin\tailwind.config.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [],
  variants:{
    extend:{
      rotate: ['group-hover']
    }
  },
  theme: {
    extend: {
      margin:{
        '10px':'10px',
      },
      blur: {
        xs: '2px',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    }
  },
  plugins: [],
}
