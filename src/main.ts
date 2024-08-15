import Vue from 'vue';
import App from './App.vue';
import VueMq from 'vue-mq';
import './assets/style.css';
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    desktop: Infinity,
  },
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
