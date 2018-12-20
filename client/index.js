/*
* index.js
* 项目入口文件
* */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

// 引入全局CSS样式
import './assets/styles/global.styl'
import createRouter from './config/router'
import creatStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

// 用到服务端渲染需要这样单独创建，不然会导致内存溢出
const router = createRouter()
const store = creatStore()

// 动态注册模块
store.registerModule('c', {
  state: {
    text: 3
  }
})

// 解绑注册的模块
// store.unregisterModule('c')

// store中的watch
// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watched:', newCount)
// })

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})
router.afterEach((to, from) => {
  console.log('after each invoked')
})

// 在body下创建一个根节点
// const root = document.createElement('div')
// document.body.appendChild(root)

// 将根节点root注入到app.vue组件中
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
