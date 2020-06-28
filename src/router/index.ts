import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
    // component:() => import(/* webpackChunkName: "home" */ '../components/Home.vue') 
  },
  {
    path: '/empty',
    name: 'Empty',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/EmptyPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
