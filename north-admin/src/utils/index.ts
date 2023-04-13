/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-30 14:16:03
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-13 15:36:18
 * @FilePath: \north\north-admin\src\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 
 * @param url url地址
 * @returns url地址中的所有参数
 */
export const getParams = (url: string) => {
  // 获取首个?位置
  const index = url.indexOf('?')
  let params: any = {}
  if (index !== -1) {
    let paramsArr = url.substring(index + 1).split('&')
    paramsArr.forEach(item => {
      const key = item.split('=')[0]
      const value = item.split('=')[1] ? item.split('=')[1] : null
      // 是否重复key
      if (params.hasOwnProperty(key)) {
        if (Array.isArray(params[key])) {
          params[key] = params[key].concat([value])
        } else {
          params[key] = new Array(params[key]).concat([value])
        }
      } else {
        params[key] = value
      }
    })
    return params
  }
  return null
}

/**
 * @param url url地址
 * @param name 指定参数名
 * @returns 指定参数值
 */

export const getQuery = (url: string, name: string) => {
  // 获取首个?位置
  const index = url.indexOf('?')
  const result = []
  if (index !== -1) {
    const queryStrArr = url.substring(index + 1).split('&')
    for (var i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split('=')
      if (itemArr[0] === name) {
        console.log('itemArr[1]', itemArr[1])
        if (itemArr[1]) {
          result.push(itemArr[1])
        } else {
          result.push(null)
        }
      }
    }
    return result.length > 0 ? (result.length > 1 ? result : result[0]) : null
  }
  return null
}


/* 生成svg案例
const svgOptions = {
    tag: 'svg',
    attrs: {
      id: 'mySvg'
    },
    children: [{
      tag: 'g',
      children: [{
        tag: 'text',
        attrs: {
          id: 'textEle',
          x: '0',
          y: '0',
          style: 'font-family:Verdana;font-size:24px;color:red'
        },
        content: 'fly',
        children: [{
          tag: 'animateMotion',
          attrs: {
            path: 'M 0 0 L 100 100',
            dur: '5s',
            fill: 'freeze'
          }
        }]
      }]
    }]
  }
 */


/**
 * 
 * @param tagOption 标签选项
 * @returns 元素标签
 */
export const createSvgEl = (tagOption: any) => {
  const el = createSvgTag(tagOption.tag, tagOption?.attrs, tagOption?.content)
  if (tagOption.children && tagOption.children.length > 0) {
    tagOption.children.forEach((item: any) => {
      let elItem = createSvgEl(item)
      el.appendChild(elItem)
    })
  }
  return el
}

/**
 * 
 * @param tag 标签名
 * @param attrs 属性
 * @returns 元素标签
 */

function createSvgTag(tag: string, attrs: any, content: string) {
  const ns = 'http://www.w3.org/2000/svg'
  const xlinkns = 'http://www.w3.org/1999/xlink'
  let el = document.createElementNS(ns, tag);
  if (tag === 'svg') {
    el.setAttribute('xmlns:xlink', xlinkns);
  }
  if (content) {
    el.innerHTML = content
  }
  for (let k in attrs) {
    if (k === 'xlink:href') {
      el.setAttributeNS(xlinkns, k, attrs[k]);
    } else {
      el.setAttribute(k, attrs[k]);
    }
  }
  return el;
}