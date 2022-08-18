export default [
    {
        path:'/dashboard',
        component: () => import('../pages/dashboard'),
        name:'dashboard'
    },
    {
        path:'/election',
        component: () => import('../pages/election'),
        name:'election'
    }
]