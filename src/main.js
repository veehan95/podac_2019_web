import Vue from 'vue'
import App from './App'
import VueSession from 'vue-session'

import { router } from './routes'

Vue.use(VueSession)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
