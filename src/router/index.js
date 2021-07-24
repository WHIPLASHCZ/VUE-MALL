import Vue from 'vue'
import VueRouter from 'vue-router'

// baseURL = "http://152.136.185.210:7878/api/m5" 
const home = ()=>import('../views/home/home.vue');
const cart = ()=>import('../views/cart/cart.vue');
const type = ()=>import('../views/type/type.vue');
const mine = ()=>import('../views/mine/mine.vue');
const detail = ()=>import('../views/detail/detail.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/type',
    component: type
  },
  {
    path: '/mine',
    component: mine
  },
  {
    path: '/detail/:iid',
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
