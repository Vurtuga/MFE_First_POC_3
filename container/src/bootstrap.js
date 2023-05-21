import Vue from 'vue'
import App from './App.vue'
import router from './router/routes';
Vue.config.productionTip = false
import {remoteLoader} from './utils/remote-loader';

const remoteLoaderInstance = new remoteLoader ();

Vue.prototype.$remoteLoader = remoteLoaderInstance;


const app = new Vue({router ,render : h => h(App)});



(async () => {
  await remoteLoaderInstance.loadModule ('http://localhost:8084/remoteEntry.js','shared','./AHBSUI').then((module) => {
   /*  Vue.prototype.$uiComponent = module; */
  //debugger
  // Vue.use(module.default);
  //  let app = new Vue({router ,render : h => h(App)});
 
    app.$mount('#app');
  });
})();

/* Vue.use( async () => { await remoteLoaderInstance.loadModule ('http://localhost:8084/remoteEntry.js','shared','./AHBSUI')}); */
/* import {UI_Components} from 'shared/AHBSUI'; */
/* const UI_Components = this.$remoteLoader */


/* new Vue({router,
  render: h => h(App),
}).$mount('#app')
 */
/* function promise.then(data => { 
  // initiate a Vue 2 project by creating a new Vue instance 
  let app = new Vue({ 
    // specify the element to mount the app 
    el: “#app”, 
    // specify the data properties for the app 
    data: { message: data }, 
    // specify the methods for the app 
    methods: { sayHi: function() { alert(this.message); } } 
  }); 
}); */