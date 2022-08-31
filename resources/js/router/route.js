export default [
    {
        path:'/admin/announcement',
        component: () => import('../pages/admin/announcement'),
        name:'admin-announcement',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/voter',
        component: () => import('../pages/admin/voter'),
        name:'admin-voter',
        meta: { requireAuth: true },
    },
]