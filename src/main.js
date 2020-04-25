import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.component('timeline', vue2vis.Timeline);

new Vue({
  render: h => h(App),
}).$mount('#app')
