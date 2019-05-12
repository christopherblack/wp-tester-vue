import Vue from 'vue'
import './plugins/element.js'
import './icons'
import router from './router'
import store from './store'
import App from './App.vue'


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  render: h => h(App),
}).$mount('#app');
