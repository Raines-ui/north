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
  console.log(data)
  return data.splice((page - 1) * size, size * page)
}