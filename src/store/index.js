import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// 需要添加，对vuex进行本地化localStorage，否则刷新后vuex数据会消失
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// 不需要像这样单独引入`import app from './modules/app'`
// 这里将modules下所有文件自动导入
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

const store = new Vuex.Store({
    modules,
    getters,
    // 当state中的值发生改变，此时localStorage中的vuex的值会同步把state中的所有值存储起来，
    // 当页面刷新的时候，state的值会从localStorage自动获取vuex的value值，赋值到state中
    plugins: [createPersistedState()]
})

export default store
