<template>
  <div class="navbar navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
        Formulario
      </router-link>
      
      <div class="d-flex">
        <router-link to="/ingreso" class="navbar-brand" v-if="!userAuth">
          Ingreso
        </router-link>
        <router-link to="/registro" class="navbar-brand" v-if="!userAuth">
          Registro
        </router-link> 
        <router-link class="btn btn-dark" to="/" v-if="userAuth">
          Tareas
        </router-link>
        <button class="btn btn-dark" v-if="userAuth" @click="closeSesion">Cerrar Sesión</button>
      </div>
  </div>
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters(['userAuth'])
  },
  methods:{
    ...mapActions(['closeSesion'])
  }

}
</script>
