import request from '@/utils/request'

export function saveMenu(data) {
    return request({
        url: '/menu',
        method: 'post',
        data
    })
}

export function deleteMenu(id) {
    return request({
        url: '/menu/' + id,
        method: 'delete',
    })
}

export function updateMenu(data) {
    let config = {
        url: '/menu',
        method: 'put',
        data
    }
    return request(config)
}

export function getAllMenuBySystemInfo(systemInfoId) {
    return request({
        url: '/menu/systemInfo/' + systemInfoId,
        method: 'get'
    })
}

export function getMenuChildren(id) {
    return request({
        url: '/menu/' + id,
        method: 'get'
    })
}

