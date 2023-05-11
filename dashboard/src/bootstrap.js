import Vue from 'vue'
import App from './App.vue'
import {routes} from './router/router'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

let app ;

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

    //set initial path for the router   
    
    if(initialPath && router.currentRoute.path !== initialPath){
        router.push(initialPath);
    }

    app = new Vue({
        router,
        render: h => h(App),
    });

    app.$mount(el);
    

    console.log("Dashboard routes =>",router)
    return {
        onParentNavigate(args){
            if(router.currentRoute.path !== args.path){
                router.push(args.path);  
                
            }
        }
    }
}

const destroy = function(){
    console.log("mounted app destroyed");
    app.$destroy();
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

export {mount,destroy};