/*
 * @Author: wuxc 2445951561@qq.com
 * @Date: 2023-02-18 23:53:00
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-31 14:59:07
 * @FilePath: \north-admin\src\mock\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Mock配置文件
 */
// 首先引入Mock
import Mock from 'mockjs'
// 引入所有的mock文件
import { getMessageList } from './api/user/home'
import { login, getUserInfo, logout } from './api/user/index'
// 后端接口地址
Mock.mock('/api/home/getMessageList', 'get', getMessageList)
Mock.mock('/api/login', 'post', login)
// 用正则处理带有请求参数的请求地址
Mock.mock(RegExp("/api/user/getUserInfo" + ".*"), 'get', getUserInfo)
Mock.mock('/api/user/logout', 'post', logout)
// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '500'
});


