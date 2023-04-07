/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-25 09:59:32
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-04-07 17:12:43
 * @FilePath: \north\north-admin\src\mock\api\home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: wuxc 2445951561@qq.com
 * @Date: 2023-02-19 00:02:33
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-25 17:12:35
 * @FilePath: \north-admin\src\mock\basis\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/******************
 * 基础 - 登录 - mock
 *****************/
import Mock from 'mockjs'
import { creatPageData } from '@/mock/utils'
// 生成随机数据
const Random = Mock.Random
// const test = new MockDataModule()
// const testList = test.mockData({
//   id: 'id',
//   content: 'csentence|5|10',
//   createTime: 'datetime'
// }, 20)


const messageList = Mock.mock({
  'data|25': [{
    'id': () => Random.id(),
    'name': () => Random.name(),
    'content': () => Random.csentence(5, 20),
    'createTime': () => Random.datetime()
  }]
})

export function getMessageList(options: any) {
  const body = JSON.parse(options.body)
  const page = body.page
  const size = body.size
  const lens = messageList.data.length
  return {
    code: 200,
    page: page,
    size: size,
    pageCount: Math.ceil(lens / size),
    total: lens,
    result: creatPageData(messageList.data, page, size)
  }
}
