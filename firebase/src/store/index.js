import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas : [],
    tarea : {
      nombre : '',
      categorias: [],
      estado : '',
      numero : 0
    }
  },
  getters: {
  },
  mutations: {
    load(state , payload){
        state.tareas = payload
    },
    set(state, payload){
      state.tareas.push(payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    delete(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tarea(state, payload){
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/')
      }else{
        state.tarea = state.tareas.find(item => item.id === payload)
      }
    },
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
      router.push('/')
    }
  },
  actions: {
    loadLocalStorage({commit}){
      if(localStorage.getItem('tareas')){
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('load', tareas)
        return 
      }

      localStorage.setItem('tareas', JSON.stringify([]))
    },
    setTareas({commit}, tarea){
      commit('set', tarea)
    },
    deleteTareas({commit}, id){
      commit('delete', id)
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    updateTarea({commit}, tarea){
      commit('update', tarea)
    }
  },
  modules: {
  }
})
