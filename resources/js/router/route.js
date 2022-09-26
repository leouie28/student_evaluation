export default [
    {
        path:'/admin/status',
        component: () => import('@/pages/admin/status'),
        name:'admin-status',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/announcement',
        component: () => import('../pages/admin/announcement'),
        name:'admin-announcement',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/election',
        component: () => import('@/pages/admin/election'),
        name:'admin-election',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/election/form',
        component: () => import('@/pages/admin/election/form/index.vue'),
        name:'admin-election-form',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/election/:id',
        component: () => import('@/pages/admin/election/_id/index.vue'),
        // name:'admin-election-show',
        // meta: { requireAuth: true },
        children: [
            {
                path: 'details',
                component: () => import('@/pages/admin/election/form/index.vue'),
                name: 'admin-election-details',
                meta: { parent:'/admin/election', requireAuth:true }
            },
            {
                path: 'status',
                component: () => import('@/pages/admin/election/_id/status.vue'),
                name: 'admin-election-status',
                meta: { parent:'/admin/election', requireAuth:true }
            },
            {
                path: 'votes',
                component: () => import('@/pages/admin/election/_id/votes.vue'),
                name: 'admin-election-votes',
                meta: { parent:'/admin/election', requireAuth:true }
            }
        ]
    },
    {
        path:'/admin/voter',
        component: () => import('../pages/admin/voter'),
        name:'admin-voter',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/partylist',
        component: () => import('../pages/admin/partylist'),
        name:'admin-partylist',
        meta: { requireAuth: true },
    },

    //student route
    {
        path:'/home',
        component: () => import('@/pages/student/home'),
        name:'student-home',
        meta: { requireAuth: true },
    }
]