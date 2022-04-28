<template>
  <Titulo texto="Ruta con parámetros" />
  <p>{{articulo.body}}</p>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
    components : {
        Titulo
    },
    data(){
        return{
            articulo : {}
        }
    },
    methods:{
        async consumirArticulo(){
            try {
                const data = await fetch (`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                const objecto = await data.json();
                //console.log(objecto);
                this.articulo = objecto; 
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.consumirArticulo();
    }
}
</script>

<style>

</style>