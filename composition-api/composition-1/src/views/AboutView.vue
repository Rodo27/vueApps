<template>
  <div class="about">
    <Titulo :contador="contador" :color="color"/>
    <h1 :style="{'color' : color}">Contador: {{contador}}</h1>
    <!--
    <button class="btn btn-primary mx-2" @click="aumentar">+</button>
    <button class="btn btn-primary mx-2" @click="disminuir">-</button>
    -->
    <Button :textoBoton="'Aumentar'"  @accion="aumentar" />
    <Button :textoBoton="'Disminuir'" @accion="disminuir" />
  </div>
  <hr>
  <input type="text" v-model="texto">
  <p>{{texto}}</p>
</template>

<script>
import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"

import Titulo from '../components/Titulo.vue'
import Button from '../components/Button.vue'
export default({
  components:{
    Titulo,
    Button
  },
  setup() {
    const contador = ref(0)
    const texto = ref('')
    //methods

    const aumentar = () => contador.value++
    const disminuir = () => contador.value--

    //computeds

    const color = computed(() => {
      return contador.value > 9 ? 'blue' : 'red'
    })

    return {contador, aumentar, disminuir, color, texto}
  },
})
</script>
