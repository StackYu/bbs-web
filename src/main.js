import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

import 'highlight.js/styles/atom-one-dark.css'
import highlightJS from 'highlight.js'
import store from './store'

import './permission'

Vue.use(highlightJS)

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')