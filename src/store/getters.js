const getters = {
    isVisitor: state => state.app.isVisitor,
    token: state => state.user.token,
    rememberToken: state => state.user.rememberToken,
    user: state => state.user.user,
    exp: state => state.user.exp,
    rememberExp: state => state.user.rememberExp,
}
export default getters
