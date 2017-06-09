import Vue from 'vue'
import Router from 'vue-router'
import components from '../../index.js'

Vue.use(Router)

const route = []

for (let key in components) {
  route.push({
    path: '/' + key,
    component: components[key]
  })
}

export default new Router({
  routes: route
})
