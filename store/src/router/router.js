import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const StoreManage = () => import(/* webpackChunkName: "login" */ '../components/storeManage.vue')
const Home = () => import(/* webpackChunkName: "login" */ '../pages/home.vue')
const routes = [
    {path:'/', component:Home,
        children:[
            {path:'/storeManage', component:StoreManage}
        ]
    }
]

const router = new VueRouter({
    routes,
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


export default router