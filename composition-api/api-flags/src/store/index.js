import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  getters: {
  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload
    },
    setPaisesFiltrados(state, payload){
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({commit}){
      try {
        const res = await fetch('https://restcountries.com/v3/all')
        const data = await res.json()
        //console.log(data)
        commit('setPaises', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    topPaisesPoblacion(state){
      return state.paises.sort((a,b) => a.population < b.population ? 1 : -1)
    }
  },
  modules: {
  }
})
