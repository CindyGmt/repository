import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const Login = () => import(/* webpackChunkName: "login" */ '../pages/login.vue')
const Home = () => import(/* webpackChunkName: "login" */ '../pages/home.vue')
const Register = () => import(/* webpackChunkName: "login" */ '../pages/register.vue')
const Purchased = () => import(/* webpackChunkName: "login" */ '../pages/purchased.vue')
const Upload0 = () => import(/* webpackChunkName: "login" */ '../pages/upload0.vue')
const routes = [
    {path:'/login', component:Login},
    {path:'/', component:Home},
    {path:'/home', component:Home},
    {path:'/register', component:Register},
    {path:'/purchased', component:Purchased},
    {path:'/upload0', component:Upload0},
]

const router = new VueRouter({
    routes,
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

router.beforeEach((to, from, next) => {
    if(!localStorage.getItem('token')){
        if(to.path !== '/login' && to.path !== '/register' && to.path !== '/home'){
           return next('/login')
        }else{
          next()
        }
    }else{
        next()
    }
  })

export default router