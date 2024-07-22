import request from '@/utils/request'

/**
 * 用户登录
 * @param data 登录数据
 * @returns {*} 响应结果
 */
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function test() {
    return request({
        url: '/test',
        method: 'get'
    })
}
