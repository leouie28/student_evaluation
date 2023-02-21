
export default [
    {
        path:'/admin/evaluation',
        component: () => import('@/pages/admin/evaluation'),
        name:'admin-evaluation',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/department',
        component: () => import('@/pages/admin/department'),
        name:'admin-department',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/level',
        component: () => import('@/pages/admin/level'),
        name:'admin-level',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/section',
        component: () => import('@/pages/admin/section'),
        name:'admin-section',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/subject',
        component: () => import('@/pages/admin/subject'),
        name:'admin-subject',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/user-student',
        component: () => import('@/pages/admin/student'),
        name:'admin-user-student',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/user-admin',
        component: () => import('@/pages/admin/evaluation'),
        name:'admin-user-admin',
        meta: { requireAuth: true },
    },
    {
        path:'/admin/user-teacher',
        component: () => import('@/pages/admin/teacher'),
        name:'admin-user-teacher',
        meta: { requireAuth: true },
    },
    {
        path:'/admin',
        component: () => import('@/pages/admin/dashboard'),//admin view
        children: [
            {
                path: 'dashboard',
                component: () => import('@/pages/admin/dashboard'),
                name: 'admin-election-details',
                meta: { parent:'/admin' }
            },
        ]
    },
]

// export default [
//     //admin routes
//     {
//         path:'/admin/status',
//         component: () => import('@/pages/admin/status'),
//         name:'admin-status',
//         meta: { requireAuth: true },
//     },
//     {
//         path:'/admin/announcement',
//         component: () => import('../pages/admin/announcement'),
//         name:'admin-announcement',
//         meta: { requireAuth: true },
//     },
//     {
//         path:'/admin/election',
//         component: () => import('@/pages/admin/election'),
//         name:'admin-election',
//         meta: { requireAuth: true },
//     },
//     {
//         path:'/admin/election/form',
//         component: () => import('@/pages/admin/election/form/index.vue'),
//         name:'admin-election-form',
//         meta: { requireAuth: true },
//     },
//     {
//         path:'/admin/election/:id',
//         component: () => import('@/pages/admin/election/_id/index.vue'),
//         // name:'admin-election-show',
//         // meta: { requireAuth: true },
//         children: [
//             {
//                 path: 'details',
//                 component: () => import('@/pages/admin/election/form/index.vue'),
//                 name: 'admin-election-details',
//                 meta: { parent:'/admin/election', requireAuth:true }
//             },
//             {
//                 path: 'status',
//                 component: () => import('@/pages/admin/election/_id/status.vue'),
//                 name: 'admin-election-status',
//                 meta: { parent:'/admin/election', requireAuth:true }
//             },
//             {
//                 path: 'votes',
//                 component: () => import('@/pages/admin/election/_id/votes.vue'),
//                 name: 'admin-election-votes',
//                 meta: { parent:'/admin/election', requireAuth:true }
//             }
//         ]
//     },
//     {
//         path:'/admin/voter',
//         component: () => import('../pages/admin/voter'),
//         name:'admin-voter',
//         meta: { requireAuth: true },
//     },
//     {
//         path:'/admin/partylist',
//         component: () => import('../pages/admin/partylist'),
//         name:'admin-partylist',
//         meta: { requireAuth: true },
//     },

//     //student route
//     {
//         path:'/home',
//         component: () => import('@/pages/student/home'),
//         name:'student-home',
//         meta: { requireAuth: true },
//     },
//     {
//         path:'/election/:key',
//         component: () => import('@/pages/student/election/index.vue'),
//         name:'student-election',
//         meta: { requireAuth: true },
//     },
//     {
//         path:'/election/:key/vote',
//         component: () => import('@/pages/student/election/form.vue'),
//         name:'student-election-form',
//         meta: { requireAuth: true },
//     },
//     {
//         path:'/account',
//         component: () => import('@/pages/student/account/index.vue'),
//         name:'student-account',
//         meta: { requireAuth: true },
//     },
// ]