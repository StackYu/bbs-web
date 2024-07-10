import request from '@/utils/request'

export function getUsersByPage(page, num) {
    let config = {
        url: '/v1/api/user',
        method: 'get',
        params: {
            page: page,
            num: num
        }
    }
    return request(config)
}

export function deleteUsersByUid(uid) {
    let config = {
        url: '/v1/api/user/' + uid,
        method: 'delete',
    }
    return request(config)
}
