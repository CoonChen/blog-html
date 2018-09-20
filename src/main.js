import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'


import http from "./http";
import qs from 'qs'

Vue.config.productionTip = false;
Vue.use(ElementUI);

window.$http = http;
window.$qs = qs;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');

