<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea" />
    <hr>
  </form>
  <ListaTareas />
  <hr>
</template>

<script>

import Input from '../components/Input'
import ListaTareas from '../components/ListaTareas.vue'
import {mapActions} from 'vuex'

const shortid = require('shortid');

export default {
  name: 'HomeView',
  components: {
   
  },
  data(){
    return {
      tarea: {
        id: '',
        nombre : '',
        categorias: [],
        estado : '',
        numero : 0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario(){
      console.log(this.tarea)

      if(this.tarea.nombre.trim() === ""){
        console.log("Campo Vacio")
        return 
      }
      
      console.log("No esta vacio")

      //generar id
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id)
      // enviar datos
      this.setTareas(this.tarea)

      // limpian datos
      this.tarea = {
        id: '',
        nombre : '',
        categorias: [],
        estado : '',
        numero : 0
      }
    }
  },
  components :{
    Input,
    ListaTareas
  },
  computed : {
   
   
  }
}
</script>
