const state = {
    token: "Test Token ",
    user: '',
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USER: (state, user) => {
        state.introduction = introduction
    }
}

const actions = {
    getUsers({commit}) {
        return new Promise((resolve, reject) => {
            /*getUsers().then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            });*/
        })
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
