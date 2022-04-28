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
    path: '/contador',
    name: 'contador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contador.vue')
  },
  {
    path: '/paises',
    name: 'paises',
    component: () => import(/* webpackChunkName: "about" */ '../views/Paises.vue')
  },
  {
    path: '/paises/:pais',
    name: 'Pais',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Pais.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
