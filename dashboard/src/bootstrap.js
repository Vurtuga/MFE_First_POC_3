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
        base : initialPath,
    });
    console.log("Dashboard routes =>",router)
    new Vue({
        router,
        render: h => h(App),
        watch: {
            $route (to, from) {
                if(onNavigate){
                onNavigate({to: to,from: from});
                }
            }
        }
    }).$mount(el);

    return {
        onParentNavigate(args){

            if(router.currentRoute.path !== args.to.path){
                router.push(args.to.path);  
            }
            console.log("=================================== ");
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