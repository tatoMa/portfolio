import Vue from 'vue';
import './plugins/vuetify';
import AOS from 'aos';
import App from './App.vue';
import router from './router';
import store from './store';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
