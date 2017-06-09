import Vue from 'vue'
import App from './App'
import router from './router'
import ViewContainer from './components/common/ViewContainer.vue'

Vue.component('view-container', ViewContainer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
