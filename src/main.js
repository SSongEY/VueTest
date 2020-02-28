import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './components';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import store from './store';
import api from './api';

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app');
