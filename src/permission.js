import router from './router'
import store from './store'

// 路由（拦截器）开始前
router.beforeEach(async (to, from, next) => {
    // 设置页面title
    document.title = to.meta.title

    // 判断是否为游客
    if (store.getters.isVisitor) {
        next()
    } else {
        const seconds = new Date() / 1000
        // 判断登录是否过期
        if (store.getters.exp > seconds) {
            next()
        } else {
            // 清空vuex值
            store.dispatch('app/clear')
            store.dispatch('user/clear')
            next('/login')
        }
    }
});

router.afterEach(() => {
})
