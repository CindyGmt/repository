import axios from "axios";
import Qs from "qs";
import { Message } from 'element-ui';
import store from '../store/index';
import router from '../router/router';

// 环境切换
if(process.env.NODE_ENV === 'development'){
    axios.defaults.baseURL = '/api'
}else if(process.env.NODE_ENV === 'production'){
    axios.defaults.baseURL = 'https://43.129.231.24:8081/'
}

// 请求超时时间
axios.defaults.timeout = 6000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
    config => {
        const token = store.state.token
        token && (config.headers.Authorization = token)
        return config
    },
    error =>{
        return Promise.error(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if(response.status === 200){
            return Promise.resolve(response)
        }else{
            return Promise.reject(response)
        }
    },
    error => {
        if(error.response.status){
            switch(error.response.status){
                // 未登录
                case 401:
                    router.replace({
                        path:'/login',
                        query:{
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                // token过期
                case 403:
                    Message({
                        message:'登录过期，请重新登录',
                        duration: 1000,
                        showClose: true
                    })
                    // 清除token
                    localStorage.removeItem('token')
                    store.commit('setToken',null)
                    // 跳转登录页面，并将要浏览的页面fullpath传过去，登录成功后，跳转需要访问的页面
                    setTimeout(()=>{
                        router.replace({
                            path:'/login',
                            query:{
                                redirect: router.currentRoute.fullPath
                            }
                        })
                    },1000);
                    break;
                // 页面不存在
                case 404:
                    Message({
                        message:'网络请求不存在',
                        duration:1500,
                        showClose:true
                    })
                    break;
                default:
                    Message({
                        message:error.response.data.message,
                        duration:1500,
                        showClose:true
                    })
            }
            return Promise.reject(error.response)
        }
    }
)

// get方法
export function get(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params
        })
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err.data)
        })
    })
}

export function post(url,params){
    return new Promise((resolve,reject) => {
        axios.post(url,Qs.stringify(params))
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err.data)
        })
    })
}