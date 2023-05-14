import Vue from "vue";
import VueRouter from 'vue-router';


Vue.use(VueRouter);


 import HelloWorld from '../components/HelloWorld.vue';
/*import DashboardApp from '../components/DashboardApp.vue'; */


export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dashboard*', name:"dashboard", component: () => import ("../components/DashboardApp.vue")},
        { path: '/', name:"HelloWorld", component: HelloWorld}
    ]
  })