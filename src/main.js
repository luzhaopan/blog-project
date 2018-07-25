// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//通过npm install vue-resource --save安装完vue-resource,然后引入
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false
//使用
Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令v-rainbow
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#"+Math.random().toString(16).slice(2,8);
  }
})

//自定义指令v-theme
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1260px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg == 'column'){
      el.style.background = "#6677cc";
      el.style.padding = '20px';
    }
  }
})

//全局定义，自定义过滤器to-uppercase,第一个参数为过滤器的名字to-uppercase，第二个参数为一个函数
/*Vue.filter("to-uppercase",function (value) {
  return value.toUpperCase();//value接收的值为传过来的blog.title
})*/

//自定义过滤器snippet
Vue.filter("snippet",function (value) {
  return value.slice(0,100)+"...";//value接收的值为传过来的blog.title
})

// 创建路由
const router = new VueRouter({
  routes: Routes,
  mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
