import Vue from 'vue'
import App from './App.vue'
import {routes} from './router/router'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const mount = (el,{onNavigate , defaultHistory, initialPath}) =>{
    
    const router = defaultHistory || new VueRouter({ 
        mode: 'abstract', 
        routes: routes,        
    });

    if(onNavigate){
        router.afterEach((to, from) => {
            onNavigate({to: to,from: from});
        });
    }

    console.log("Dashboard routes =>",router)
    new Vue({
        router,
        render: h => h(App),
    }).$mount(el);

    return {
        onParentNavigate(args){
            if(router.currentRoute.path !== args.path){
                router.push(args.path);  
            }
        }
    }
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_dashboard-dev-root");
    const InnerRouter = new VueRouter({ 
        mode: 'history', 
        routes: routes,
        
    });
    if(devRoot){
        mount(devRoot,{defaultHistory:InnerRouter });
    }
}

export {mount};