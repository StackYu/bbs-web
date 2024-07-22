import {Base64} from 'js-base64';
import store from "@/store";

const state = {
    token: '',
    rememberToken: '',
    user: {},
    exp: 0,
    rememberExp: 0
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_REMEMBER_TOKEN: (state, rememberToken) => {
        state.rememberToken = rememberToken
    },
    SET_USER: (state, user) => {
        state.user = user
    },
    SET_EXP: (state, exp) => {
        state.exp = exp
    },
    SET_REMEMBER_EXP: (state, exp) => {
        state.rememberExp = exp
    }
}

const actions = {
    clear({commit}) {
        commit('SET_TOKEN', '')
        commit('SET_USER', {})
        commit('SET_EXP', 0)
        commit('SET_REMEMBER_TOKEN', '')
        commit('SET_REMEMBER_EXP', 0)
    },
    saveUserInfo({commit}, data) {
        if (data !== undefined) {
            const token = data.token

            commit('SET_TOKEN', token);
            //获得base64
            const base64Str = token.substring(token.indexOf('.') + 1, token.lastIndexOf('.'));
            const item = JSON.parse(Base64.decode(base64Str));

            // 设置User
            commit('SET_USER', JSON.parse(item.USER_INFO));
            // 设置失效时间
            commit('SET_EXP', item.exp);
            // 设置非游客
            store.dispatch('app/setNoVisitor');

            const rememberToken = data.rememberToken
            const rememberTokenBase64Str = rememberToken.substring(rememberToken.indexOf('.') + 1, rememberToken.lastIndexOf('.'));
            const rememberItem = JSON.parse(Base64.decode(rememberTokenBase64Str));
            // 记住密码token设置
            commit('SET_REMEMBER_TOKEN', data.rememberToken);
            commit('SET_REMEMBER_EXP', rememberItem.exp);
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
