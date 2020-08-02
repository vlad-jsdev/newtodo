import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/store'
import router from "@/router";

Vue.config.productionTip = false

new Vue({
  vuetify,
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
