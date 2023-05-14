const routes =  [
    { path: '/dashboard', name:"dashboard", component: () => import ("../components/DashboardIndex.vue")},
    { path: '/dashboard/Test', name:"TestPage", component: () => import ("../components/TestPage.vue") }
]

export {routes};
