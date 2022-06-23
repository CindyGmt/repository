import {get, post} from './http'

// 登录
export const login = p => post('/api',p)
export const a = () => get('/api') 