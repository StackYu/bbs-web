import request from '@/utils/request'

export function getMenu() {
    return request({
        url: '/v1/api/menu',
        method: 'get'
    })
}

export function getMenuChildren(id) {
    return request({
        url: '/v1/api/menu/' + id,
        method: 'get'
    })
}

export function deleteMenuByUid(id) {
    let config = {
        url: '/v1/api/menu/' + id,
        method: 'delete',
    }
    return request(config)
}