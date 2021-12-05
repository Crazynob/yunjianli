import { createRouter, createWebHashHistory } from 'vue-router'
import editor from '../views/editor.vue'
import index from "../views/index.vue"

const routes = [
  {
    path: '/editor',
    name: 'editor',
    component: editor
  },
  {
    path: '/',
    name: 'index',
    component: index
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
  history: createWebHashHistory(),
  routes
})

export default router
