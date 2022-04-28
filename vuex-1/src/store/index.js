import { createStore } from 'vuex'

export default createStore({
  state: {
    contador : 100
  },
  getters: {
  },
  mutations: {
    incrementar(state, payload){
      state.contador = state.contador + payload
    },
    disminuir(state, payload){
      if(state.contador != 0){
        state.contador = state.contador - payload
      }
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar', 10)
    },
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },
    accionBoton({commit}, objecto){
      if(objecto.estado){
        commit('incrementar',objecto.numero)
      }else{
        commit('disminuir',objecto.numero)
      }
    }
  },
  modules: {
  }
})
