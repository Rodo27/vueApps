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
    },
    user : null,
    error : {tipo: null, mensaje: null}
  },
  getters: {
  },
  mutations: {
    setError(state , payload){
      if(payload === "EMAIL_NOT_FOUND"){
        return state.error = {tipo: 'email', mensaje: 'Email no registrado'}
      }
      if(payload === "INVALID_PASSWORD"){
        return state.error = {tipo: 'password', mensaje: 'Contraseña incorrecta'}
      }
      if(payload === "EMAIL_EXISTS"){
        return state.error = {tipo: 'email', mensaje: 'Email ya registrado'}
      }
      if(payload === "INVALID_EMAIL"){
        return state.error = {tipo: 'email', mensaje: 'Formato incorrecto de Email'}
      }

      if(payload === null){
        return state.error = {tipo: null, mensaje: null}
      }
    },
    setUser(state , payload){
      state.user = payload
    },
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
    closeSesion({ commit }){
      commit('setUser', null)
      router.push('/ingreso')
      localStorage.removeItem('user')
    },
    async loginUser({commit}, user){
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDNDjnLxJ2FidA7AQnG8KVy-HXH5Bfcnk',{
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        })

        const userDB = await res.json()
        //console.log(userDB)

        if(userDB.error){
          console.log(userDB.error)
          return commit('setError',userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError',null)
        router.push('/')
        localStorage.setItem('user', JSON.stringify(userDB))

      } catch (error) {
        console.log(error)
      }
    },
    async registerUser({commit}, user){
      console.log(user);
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDNDjnLxJ2FidA7AQnG8KVy-HXH5Bfcnk',{
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        })

        const userDB = await res.json()
        //console.log(userDB)

        if(userDB.error){
          console.log(userDB.error)
          console.log('This error');
          return commit('setError',userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError',null)
        router.push('/')
        localStorage.setItem('user', Json.stringify(userDB))

      } catch (error) {
        console.log(error)
      }
    },
    async loadLocalStorage({commit, state}){

      if(localStorage.getItem('user')){
        commit('setUser', JSON.parse(localStorage.getItem('user')))
      }else{
        return commit('setUser', null)
      }

      try {
        const res = await fetch(`https://udemy-api-a2278-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
        const dataDB = await res.json()
        
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
    async setTareas({commit, state}, tarea){
      try {
        const res = await fetch(`https://udemy-api-a2278-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
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
    async deleteTareas({commit, state}, id){
      try {
        await fetch(`https://udemy-api-a2278-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
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
    async updateTarea({commit, state}, tarea){
      try {
        const res = await fetch(`https://udemy-api-a2278-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
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
  getters: {
    userAuth(state){
      return !!state.user
    }
  },
  modules: {
  }
})
