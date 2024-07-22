import router from './router'
import store from './store'
import {login} from "@/api/auth";

// 路由（拦截器）开始前
router.beforeEach(async (to, from, next) => {
    // 设置页面title
    document.title = to.meta.title

    // 判断是否为游客
    if (store.getters.isVisitor) {
        next()
    } else {
        const seconds = new Date() / 1000;
        // 判断登录是否过期
        if (store.getters.exp > seconds) {
            next()
        } else {
            // 判断免密登录是否过期
            if (store.getters.rememberExp > seconds) {
                const formData = new FormData();
                formData.append('category', 1);
                formData.append('userName', store.getters.user.userName);
                formData.append('rememberToken', store.getters.rememberToken);
                formData.append('rememberPassword', true);

                // 进行免密登录
                login(formData).then(response => {
                    const {data} = response
                    if (data.error === 0) {
                        // 保存用户信息
                        store.dispatch('user/saveUserInfo', data.data)
                        next('/')
                    } else {
                        next('/login')
                    }
                })
            } else {
                // 清空vuex值
                store.dispatch('app/clear');
                store.dispatch('user/clear')
                next('/login')
            }
        }
    }
});

router.afterEach(() => {
})
