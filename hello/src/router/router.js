import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import(/* webpackChunkName: "login" */ '../pages/Login.vue')
const Home = () => import(/* webpackChunkName: "login" */ '../pages/Home.vue')

const routes = [
    {path:'/login', component:Login},
    {path:'/', redirect:'/home'},
    {path:'/home', component:Home},
]

const router = new VueRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

router.beforeEach((to, from, next) => {
  if(!localStorage.getItem('token')){
    if(to.path !== '/login'){
       return next('/login')
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router