const getters = {
    isVisitor: state => state.app.isVisitor,
    token: state => state.user.token,
    user: state => state.user.user,
    exp: state => state.user.exp,
}
export default getters
