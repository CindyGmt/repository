import axios from "axios";
import router from '../router/router'
import store from '../store/index';
import { Message } from 'element-ui';
import { baseUrl } from './baseUrl';


axios.defaults.timeout = 6000
axios.defaults.withCredentials = true
// get请求头
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    debugger
    // 在发送请求之前做些什么
    let token = localStorage.getItem('token')
    token & (config.headers.Authorization = token)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status === 200){
        return Promise.resolve(response);
    }else{
        return Promise.reject(response);
    }
}, function (error) {
    // 对响应错误做点什么
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
    }
    return Promise.reject(error);
});

const createService = baseURL => {
    const service = axios.create({
      baseURL
    })
    return service
}

// 默认主要使用ip
const request = createService(baseUrl('8081'))
// 统一登录平台使用
const node = createService(baseUrl('3000'))

// get方法
export function get(url,params){
    return new Promise((resolve,reject)=>{
        request.get(url,{
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
        request.post(url,params)
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err.data)
        })
    })
}

// get方法
export function nodeGet(url,params){
    return new Promise((resolve,reject)=>{
        node.get(url,{
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

export function nodePost(url,params){
    return new Promise((resolve,reject) => {
        node.post(url,params)
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err.data)
        })
    })
}
