//es6加载语法
//加载到的变量 from 加载的文件
import Vue from 'vue'//vue.js
import Router from 'vue-router'//vue-router.js

//vue 使用路由插件
Vue.use(Router);
//加载组件==》secript e6的语法暴露


import login from '@/components/login'

import header from '@/components/header'

import index from '@/components/index'

import admin from '@/components/admin'
//es6暴露路由
export default new Router({
  mode:"history",  //拼接的路由  保存历史记录
  routes: [
    {//路由的配置
      path:"/login",//渲染 组件的地址
      component:login//渲染的模板
    },
    {
      path:"/header",
      component:header
    },
    {
      path:"/index",
      component:index
    },
    {
      path:"/admin",
      component:admin
    }
  ]
})
