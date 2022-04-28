import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'articulo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Articulo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
