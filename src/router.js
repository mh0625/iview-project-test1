const routers = [
    {
        path: '/',
        redirect: '/parent1/children1',
        meta: {
            title: 'index'
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [
            {
                path: 'parent1',
                meta: {
                    title: '导航一'
                },
                component: (resolve) => require(['./views/parent.vue'], resolve),
                children: [
                    {
                        path: 'children1',
                        meta: {
                            title: '子导航一',
                            requireAuth: true
                        },
                        component: (resolve) => require(['./views/children.vue'], resolve)
                    },
                    {
                        path: 'children2',
                        meta: {
                            title: '子导航二',
                            requireAuth: true
                        },
                        component: (resolve) => require(['./views/children.vue'], resolve)
                    }
                ]
            },
            {
                path: 'parent2',
                meta: {
                    title: '导航二'
                },
                component: (resolve) => require(['./views/parent.vue'], resolve),
                children: [
                    {
                        path: 'children1',
                        meta: {
                            title: '子导航一',
                            requireAuth: true
                        },
                        component: (resolve) => require(['./views/children.vue'], resolve)
                    },
                    {
                        path: 'children2',
                        meta: {
                            title: '子导航二',
                            requireAuth: true
                        },
                        component: (resolve) => require(['./views/children.vue'], resolve)
                    }
                ]
            },
            {
                path: 'parent3',
                meta: {
                    title: '导航三'
                },
                component: (resolve) => require(['./views/parent.vue'], resolve),
                children: [
                    {
                        path: 'children1',
                        meta: {
                            title: '子导航一',
                            requireAuth: true
                        },
                        component: (resolve) => require(['./views/children.vue'], resolve)
                    },
                    {
                        path: 'children2',
                        meta: {
                            title: '子导航二',
                            requireAuth: true
                        },
                        component: (resolve) => require(['./views/children.vue'], resolve)
                    }
                ]
            },
            {
                path: 'parent4',
                meta: {
                    title: '导航四'
                },
                component: (resolve) => require(['./views/parent.vue'], resolve),
                children: [
                    {
                        path: 'children1',
                        meta: {
                            title: '子导航一',
                            requireAuth: true
                        },
                        component: (resolve) => require(['./views/children.vue'], resolve)
                    },
                    {
                        path: 'children2',
                        meta: {
                            title: '子导航二',
                            requireAuth: true
                        },
                        component: (resolve) => require(['./views/children.vue'], resolve)
                    },
                    {
                        path: 'children3',
                        meta: {
                            title: '子导航三',
                            requireAuth: true
                        },
                        component: (resolve) => require(['./views/children.vue'], resolve),
                        children: [
                            {
                                path: 'grandchildren1',
                                meta: {
                                    title: '选项一',
                                    requireAuth: true
                                },
                                component: (resolve) => require(['./views/children.vue'], resolve)
                            },
                            {
                                path: 'grandchildren2',
                                meta: {
                                    title: '选项二',
                                    requireAuth: true
                                },
                                component: (resolve) => require(['./views/children.vue'], resolve)
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
export default routers;