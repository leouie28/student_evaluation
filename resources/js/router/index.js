import Axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'
import navs from './navs'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },

    routes: [
        ...navs
    //   {
    //       path:'/dashboard',
    //       component: () => import('../pages/dashboard'),
    //       name:'dashboard'
    //   },
    //   {
    //       path:'/election',
    //       component: () => import('../pages/election'),
    //       name:'election'
    //   }
    ]
})

export default router