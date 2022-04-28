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
      //localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    delete(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      //localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tarea(state, payload){
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/')
        return
      }  
      state.tarea = state.tareas.find(item => item.id === payload)
    
    },
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      //localStorage.setItem('tareas', JSON.stringify(state.tareas))
      router.push('/')
    }
  },
  actions: {
    async loadLocalStorage({commit}){
      try {
        const res = await fetch('https://udemy-api-a2278-default-rtdb.firebaseio.com/tareas.json')
        const dataDB = await res.json()
        //console.log(dataDB)

        const arrayTareas = []

        for (let id in dataDB) {
          arrayTareas.push(dataDB[id])
        }
        console.log(arrayTareas)
        commit('load', arrayTareas)

      } catch (error) {
        console.log(error);
      }
    },
    async setTareas({commit}, tarea){
      try {
        const res = await fetch('https://udemy-api-a2278-default-rtdb.firebaseio.com/tareas/'+tarea.id+'.json', {
          method: 'PUT',
          headers: {'Content-tipe' : 'application/json'},
          body: JSON.stringify(tarea)
        })
      
      const dataDB = await res.json()
      console.log("data");
      console.log(dataDB)

      } catch (error) {
        console.log(error);
      }
      commit('set', tarea)
    },
    async deleteTareas({commit}, id){
      try {
        await fetch('https://udemy-api-a2278-default-rtdb.firebaseio.com/tareas/'+id+'.json', {
          method: 'DELETE'
        })

        commit('delete', id)
      
      } catch (error) {
        console.log(error);
      }
     
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    async updateTarea({commit}, tarea){
      try {
        const res = await fetch('https://udemy-api-a2278-default-rtdb.firebaseio.com/tareas/'+tarea.id+'.json', {
          method: 'PATCH',
          headers: {'Content-tipe' : 'application/json'},
          body: JSON.stringify(tarea)
        })

        const dataDB = await res.json()
        console.log(dataDB)
        commit('update', dataDB)
        
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
