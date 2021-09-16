import { createRouter, createWebHistory } from 'vue-router'
import ResultController from '../views/ResultController.vue';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Marketplace from '../views/Marketplace.vue'
import Community from '../views/Community.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "demo" */ '../views/About.vue')
  },
  {
    path:'/about',
    name: 'About',
    component: About
  },
  {
    path:'/marketplace',
    name: 'Marketplace',
    component: Marketplace
  },
  {
    path:'/community',
    name: 'Community',
    component: Community
  },
  {
    path:'/result',
    name: 'ResultController',
    component: ResultController
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
