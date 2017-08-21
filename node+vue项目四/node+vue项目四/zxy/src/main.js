// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//加载vue.js
import Vue from 'vue'
//加载默认模板
import App from './App'
//加载路由
import router from './router'
//加载store
import admin from './vuex/admin'
//加载axios
import axios from "axios"
//发送数据 能cookie完成一个跨域
axios.defaults.withCredentials=true;

var myAxios=axios.create({
  baseURL:"http://localhost:3000/"  //设置基础路径
});
//把 axios 赋值到原型上
//在组件里面使用  this.$axios
//在vuex里面使用  this.prototype.$axios
//或者单独加载  axios

Vue.prototype.$axios=myAxios;

//跨域：不同网址之间的请求
//浏览：安全策略  同源策略 相同的协议 域名 端口号与后台数据交流
                       //http www.baidu.com  :3000
                       //https google.com
//域名：网址
//http:www.baidu.com:8080/index.html
//https:www.baidu.com:8080/index.html
//https:www.google.com:8080/index.html
//https:www.google.com:4000/index.html
//vue-cli ==> location:8080
//nodejs  ==》location：3000
//jsonp ==>解决跨域的方法 script src访问 任意的服务地址 eval(fn)

//设置提示信息
Vue.config.productionTip = false;

/* eslint-disable no-new */
//生成vue实例
new Vue({
  el: '#app',//挂载到的元素
  router,//路由
  store:admin

  //sotore加载时  如果 store直接加载可以
                 //如果不是  store：加载的名称
  //template: '<App/>',//模板
  //components: { App }//组件
});
