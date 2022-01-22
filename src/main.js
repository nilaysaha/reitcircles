import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@/assets/tailwind.css";
import vuetify from './plugins/vuetify'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
