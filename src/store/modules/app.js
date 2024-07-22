const state = {
    // 是否有课访问，默认true
    isVisitor: true,
    // 系统菜单
    appMenu: []
}

const mutations = {
    SET_IS_VISITOR: (state, isVisitor) => {
        state.isVisitor = isVisitor
    },
    SET_APP_MENU: (state, appMenu) => {
        state.appMenu = appMenu
    },
}

const actions = {
    clear({commit}) {
        commit('SET_IS_VISITOR', true)
        commit('SET_APP_MENU', [])
    },
    setYesVisitor({commit}) {
        commit('SET_IS_VISITOR', true)
    },
    setNoVisitor({commit}) {
        commit('SET_IS_VISITOR', false)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
