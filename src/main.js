
import '@/styles/_base.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}


console.log(`
   __
  |__) _ . _ _ _  _| _
  |__)(_||| | (_|(_|(_|`);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
