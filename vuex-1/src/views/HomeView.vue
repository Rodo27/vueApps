<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{titulo}}</h1>
    <h2 :style="colorContador">Mi contador: {{contador}}</h2>
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminuir />
    <hr>
    <BtnAccion :estado="true" />
    <BtnAccion :estado="false" />
  </div>
</template>

<script>


import {mapState, mapActions} from 'vuex'
import BtnDisminuir from '../components/BtnDisminuir.vue'
import BtnAccion from '../components/BtnAccion.vue'

export default {
  name: 'HomeView',
  components: {
    BtnDisminuir,
    BtnAccion
  },
  computed:{
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color':'green'} : {'color' : 'red'}]
    }
  },
  data(){
    return {
      titulo : 'Vuex'
    }
  },
  methods : {
    //...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
