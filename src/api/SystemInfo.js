import request from '@/utils/request'

export function saveSystemInfo(data) {
    return request({
        url: '/systemInfo',
        method: 'post',
        data
    })
}

export function deleteSystemInfo(id) {
    return request({
        url: '/systemInfo/' + id,
        method: 'delete',
    })
}

export function updateSystemInfo(data) {
    let config = {
        url: '/systemInfo',
        method: 'put',
        data
    }
    return request(config)
}

export function getAllSystemInfo() {
    return request({
        url: '/systemInfo',
        method: 'get'
    })
}

export function getSystemInfoChildren(id) {
    return request({
        url: '/systemInfo/' + id,
        method: 'get'
    })
}

