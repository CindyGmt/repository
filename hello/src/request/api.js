import {get} from './http'

// 登录
export const login = p => get('user/login',p)