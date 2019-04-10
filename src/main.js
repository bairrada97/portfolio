
import '@/styles/_base.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.directive('arrowUp', {

  bind(el) {
    const element = el;
    const template = `<div class="arrow">
      <div class="curve"></div>
      <div class="point"></div>
      <span class="tagName">${element.tagName}</span>
    </div>`;
    element.innerHTML += template;
  },

});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
