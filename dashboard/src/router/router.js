import DashboardIndex from "../components/DashboardIndex.vue"

const routes =  [
    { path: '/dashboard', name:"dashboard", component: DashboardIndex},
    { path: '/dashboard/Test', name:"TestPage", component: () => import ("../components/TestPage.vue") }
]

export {routes};
