import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const mount = (el) =>{
    new Vue({
        render: h => h(App),
      }).$mount(el);
      
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_dashboard-dev-root")
    if(devRoot){
        mount(devRoot);
    }
}

export {mount};