import {get, post} from './http'

// 登录
export const login = p => get('user/login',p)
// 注册
export const registration = p => post('user/createUser',p)