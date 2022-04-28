<template>
    <div>
        <h1>Detalle Pais : {{name.params.pais}}</h1>
        <p v-for="(item, index) in arrayData" :key="index"> 
            {{item.name.common}}
            <br>
            {{item.capital[0]}}
            <br>
            {{item.region}}
            <br>
            {{item.flag}}
            <br>
            <a :href="item.maps.googleMaps" target="_blank">{{item.maps.googleMaps}}</a>
        </p>
    </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {useFetch} from '../hooks/useFetch'
export default {
    //props: ['pais'],
    setup(props){
        //console.log(props.pais)
        const name = useRoute()
        console.log("Pais: ", name.params.pais);


        return {...useFetch(` https://restcountries.com/v3.1/name/${name.params.pais}`),name}
    }
}
</script>

<style>

</style>