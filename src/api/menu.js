import request from '@/utils/request'

export function saveMenu(data) {
    return request({
        url: '/menu',
        method: 'post',
        data
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