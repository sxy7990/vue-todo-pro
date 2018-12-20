import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // 所有路由前面加上/base/
    // base: '/base/',
    // 给相对匹配的路由加上class
    linkActiveClass: 'active-link',
    // 给绝对匹配的路由加上class
    linkExactActiveClass: 'exact-active-link',
    // 路径跳转滚动的行为
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
    // 有些浏览器不支持history模式，是否自动处理
    // fallback: true
  })
}
