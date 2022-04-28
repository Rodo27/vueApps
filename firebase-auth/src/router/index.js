import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { routeProtected : true }
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue'),
    meta: { routeProtected : true }
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //console.log(to.meta.routeProtected)
  if(to.meta.routeProtected){
    if(store.getters.userAuth){
      next()
    }else{
      next('/ingreso')
    }
  }else{
    next()
  }
})

export default router
