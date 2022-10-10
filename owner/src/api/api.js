import {get, post, nodeGet, nodePost} from './http'
// // 文件列表
// export const getFiles = p => nodeGet('getFiles',p)
// // 删除文件
// export const delFile = p => nodeGet('delFile',p)
// // 下载文件
// export const downFile = p => nodeGet('downFile',p)
// 检查用户名是否重复
export const checkName = p => nodeGet('users/checkName',p)
// 注册用户
export const register = p => nodePost('users/register',p)
// 登录
export const login = p => nodeGet('users/login',p)