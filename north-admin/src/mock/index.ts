/*
 * @Author: wuxc 2445951561@qq.com
 * @Date: 2023-02-18 23:53:00
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-25 16:18:06
 * @FilePath: \north-admin\src\mock\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Mock配置文件
 */
// 首先引入Mock
import Mock from 'mockjs'

// 引入所有的mock文件
import { getMessageList } from './api/home'
Mock.mock('/api/home/getMessageList', 'get', getMessageList)
// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '500'
});


