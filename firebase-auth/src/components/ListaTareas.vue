<template>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categorias</th>
            <th scope="col">Estado</th>
            <th scope="col">Numero</th>
            <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in tareas" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.nombre}}</td>
                <td v-html="item.categorias">
                </td>
                <td>{{item.estado}}</td>
                <td>{{item.numero}}</td>
                <td>
                    <router-link class="btn btn-warning mr-2 btn-sm" :to="{name : 'editar', params : {id : item.id} }" >
                        Editar
                    </router-link>
                    
                    <button class="btn btn-danger btn-sm" @click="deleteTareas(item.id)">Borrar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['tareas']),
       
    },
    methods : {
        ...mapActions(['deleteTareas'])
    }

}
</script>

<style>

</style>