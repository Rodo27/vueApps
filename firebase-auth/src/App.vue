<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import {mapActions} from 'vuex'
export default {
  components: {
    Navbar
  },
  methods : {
    ...mapActions(['loadLocalStorage'])
  },
   created(){
    this.loadLocalStorage()
  }
}
</script>

