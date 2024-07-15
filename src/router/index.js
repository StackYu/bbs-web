import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/home/index'),
                name: 'Index',
            }
        ]
    },
    {
        path: '/article',
        name: 'Article',
        component: Layout,
        redirect: '/article/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/article/index'),
                name: 'Index',
            },
            {
                path: 'editor',
                component: () => import('@/views/article/editor'),
                name: 'Editor',
            },
            {
                path: 'manager',
                component: () => import('@/views/article/manager'),
                name: 'Manager',
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: Layout,
        redirect: '/user/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/user/index'),
                name: 'Index',
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/login'),
        meta:{
            title:'用户登录',
            icon:'mdi-login-variant'
        }
    },
    {
        path: '/register',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/register')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
