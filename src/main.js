import Vue from 'vue'
import App from './App'
import router from './router'
import ViewTemplate from './components/common/ViewTemplate.vue'

Vue.component('view-template', ViewTemplate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
