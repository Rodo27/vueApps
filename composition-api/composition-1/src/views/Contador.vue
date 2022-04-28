<template>
  <h1>Contador: {{contador}}</h1>
  <Button :textoBoton="'Aumentar'" @accion="aumentar" />
  <Button :textoBoton="'Disminuir'" @accion="disminuir" /> 
</template>

<script>
import Button from '../components/Button.vue'
import {useContador} from '../hooks/useContador'

export default {
    
    components:{
        Button
    },
    setup(){
        const {contador, aumentar, disminuir} = useContador()
        return {contador, aumentar, disminuir}
        //return {...useContador()}
    }
}
</script>

<style>

</style>