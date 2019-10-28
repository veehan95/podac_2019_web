import Vue from 'vue'
import App from './App'
import VueSession from 'vue-session'
import Vuex from 'vuex'

import { router } from './routes'
import store from './stores'

Vue.use(Vuex)
Vue.use(VueSession)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
