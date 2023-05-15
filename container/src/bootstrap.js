import Vue from 'vue'
import App from './App.vue'
import router from './router/routes';
Vue.config.productionTip = false
import {remoteLoader} from './utils/remote-loader';

Vue.prototype.$remoteLoader = new remoteLoader ();
/* import {UI_Components} from 'shared/AHBSUI';

Vue.use(UI_Components); */
new Vue({router,
  render: h => h(App),
}).$mount('#app')
