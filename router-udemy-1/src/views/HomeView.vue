<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Titulo texto = "Pagina de inicio" /> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Titulo from '../components/Titulo.vue'
export default {
  name: 'HomeView',
  components: {
    Titulo
  }
}
</script>
