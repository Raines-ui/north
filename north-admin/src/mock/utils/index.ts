/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-25 13:47:25
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-30 14:12:49
 * @FilePath: \north\north-admin\src\mock\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from 'mockjs'
export class MockDataModule {
  list: Array<any>
  constructor() {
    this.list = []
  }
  /**
   * 
   * @param {数据} data 
   * @param {数量} total 
   * @returns 
   */
  mockData(data: any, total: number) {
    this.list = []
    for (let i = 0; i < total; i++) {
      let item: any = {};
      for (const key in data) {
        item[key] = this.creatData(data[key].split('|'))
      }
      this.list.push(item)
    }
    return this.list
  }
  creatData(option: [string, number, number]) {
    // 生成随机数据
    const Random = Mock.Random
    const name: string = option[0]
    const min: number = option[1]
    const max: number = option[2]
    switch (name) {
      case 'id':
        return Random.id()
      case 'csentence':
        return Random.csentence(min, max)
      case 'datetime':
        return Random.datetime()
    }

  }
}

export const creatPageData = (data: Array<any>, page: number, size: number) => {
  console.log('MockData', data)
  return data.slice((page - 1) * size, size * page)
}

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

// 根据url获取query参数
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