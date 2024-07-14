import {Base64} from 'js-base64';

const state = {
    token: "Test Token ",
    user: '',
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USER: (state, user) => {
        state.introduction = user
    }
}

const actions = {
    saveUserInfo({commit}, data) {
        commit('SET_TOKEN', data)

        //获得base64
        const base64Str = data.substring(data.indexOf('.') + 1, data.lastIndexOf('.'))
        const object = JSON.parse(Base64.decode(base64Str))
        // 设置User
        commit('SET_USER', object.USER_INFO)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
