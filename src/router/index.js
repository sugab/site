import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: 'Home' },
  { path: '/resume', component: 'Resume' },
  { path: '/photos', component: 'Photos' }
]

const routes = routerOptions.map(route => {
  if (route.component) {
    return {
      path: route.path,
      component: () => import(`@/components/${route.component}`)
    }
  } else {
    return {
      path: route.path,
      redirect: route.redirect
    }
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
