import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// This is were you put all the route/views
const routes = [
  {
    path: '/',        // url path
    name: 'home',     // name of route which can be used in <router-link>
    component: Home   // the component that will be loaded
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
