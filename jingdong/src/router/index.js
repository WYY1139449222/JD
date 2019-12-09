import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

//导入 子路由映射表
import classify from './classify'
import home from './home'
import shopcat from './shopcat'
import surprise from './surprise/surprise'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children:home.concat(classify,shopcat,surprise)
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path:'*',
    redirect:'/'//走到不存在的路径时  重新跳转到首页
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
