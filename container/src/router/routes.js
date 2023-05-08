import Vue from "vue";
import VueRouter from 'vue-router';


Vue.use(VueRouter);


import HelloWorld from '../components/HelloWorld.vue';
import Dashboard from '../components/Dashboard.vue';


export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dashboard', name:"dashboard", component: Dashboard },
        { path: '/', name:"HelloWorld", component: HelloWorld }
    ]
  })