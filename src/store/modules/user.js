import {Base64} from 'js-base64';
import store from "@/store";

const state = {
    token: '',
    user: {},
    exp: 0,
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USER: (state, user) => {
        state.user = user
    },
    SET_EXP: (state, exp) => {
        state.exp = exp
    }
}

const actions = {
    clear({commit}) {
        commit('SET_TOKEN', '')
        commit('SET_USER', {})
        commit('SET_EXP', 0)
    },
    saveUserInfo({commit}, data) {
        if (data !== undefined) {
            commit('SET_TOKEN', data);
            //获得base64
            const base64Str = data.substring(data.indexOf('.') + 1, data.lastIndexOf('.'))
            const item = JSON.parse(Base64.decode(base64Str))
            // 设置User
            commit('SET_USER', JSON.parse(item.USER_INFO))
            commit('SET_EXP', item.exp)

            store.dispatch('app/setNoVisitor')
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
