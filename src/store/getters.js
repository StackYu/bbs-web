const getters = {
    isVisitor: state => state.app.isVisitor,
    token: state => state.user.token,
    user: state => state.user.user,
}
export default getters
