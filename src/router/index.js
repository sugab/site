import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Home' },
  { path: '/resume', component: 'Resume' },
  { path: '/photos', component: 'Photos' }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import(`@/components/${route.component}`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
