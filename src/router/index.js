import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/home.vue'
import Login from '@/views/login/index.vue'
import User from '@/views/user/index.vue'
import Cart from '@/views/Cart/Cart.vue'
import Cartdetsill from '@/views/Cart/Cartdetsill.vue'
Vue.use(VueRouter)
/**
 *    
 *   props  组件接收路由传参数据
 * 
 */
const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
  ,
  {
    path: '/User',
    name: 'User',
    component: User
  },
  {
    path: '/Cart/:id',
    name: 'Cart',
    component: Cart,
    props: true
  },
  {
    path: '/Cartdetsill',
    name: 'Cartdetsill',
    component: Cartdetsill
  }
]

const router = new VueRouter({
  mode: 'history', // 路静上有#号
  base: process.env.BASE_URL,
  routes
})
//守卫导航，全局
router.beforeEach((to,from,next)=>{
   console.log('的方法')
   next()  // 如果没有next 什么都没干
})

export default router
