import Vue from 'vue'
import App from './App.vue'
import {server} from './utils/request'

//定义全局变量
Vue.prototype.$server=server;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
