import Vue from 'vue'
import router from './routes.js'
import store from './store.js'
// Vue.config.productionTip = false
import App from './views/pages/index.vue'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')