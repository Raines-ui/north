/*
 * @Author: wuxc 2445951561@qq.com
 * @Date: 2023-02-18 23:53:00
 * @LastEditors: wuxc 2445951561@qq.com
 * @LastEditTime: 2023-02-19 00:13:05
 * @FilePath: \north-admin\src\mock\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Mock配置文件
 */
// 首先引入Mock
import Mock from 'mockjs';

// 引入所有的mock文件
// require('@/mock/api/home')

// 使用mockjs模拟数据
let tableList = [
  {
    id: "5ffa80aD-9CF4-0C77-eBFC-f6612BfAcF4F",
    account: "admin",
    password: "123456",
    address: "36918166@qq.com",
  },
  {
    id: "4FcC922C-C72c-95c3-Ef92-FbFAc24cc831",
    account: "ebHoL6",
    password: "i320Hu74fbn2Gi",
    address: "48165263@qq.com",
  },
]

Mock.mock("/api/mockGetList", "get", () => {
  return {
    code: "0",
    data: tableList,
  }
});


// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
});


