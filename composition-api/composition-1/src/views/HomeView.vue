<template>
  <div class="home">
    <h1 :style="{'color' : setColor}">Contador : {{contador}}</h1>
    <div>
      <button class="btn btn-primary btn-md mx-1" @click="add">+</button>
      
      <button class="btn btn-primary btn-md mx-1" @click="minus">-</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contador: 0
    }
  },
  methods:{
    add(){
      this.contador++
    },
    minus(){
      this.contador--
    }
  },
  computed:{
    setColor(){
      return this.contador > 9 ? 'blue' : 'red' 
    }
  }
}
</script>
