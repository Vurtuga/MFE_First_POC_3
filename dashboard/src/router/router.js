


import DashboardIndex from '../components/DashboardIndex.vue';
import TestPage from '../components/TestPage.vue';


const routes =  [
    { path: '/dashboard', name:"dashboard", component: DashboardIndex },
    { path: '/dashboard/Test', name:"TestPage", component: TestPage }
]

export {routes};
