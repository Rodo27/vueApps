<template>
    <h1 class="my-5">Ingreso de Usuarios</h1>
    <div class="alert alert-danger" v-if="error.tipo !== null">{{error.mensaje}}</div>
    <form @submit.prevent="processForm">
        <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email" :class="[error.tipo === 'email' ? 'is-invalid' : '']">
        <input type="password" placeholder="password" class="form-control my-2" v-model.trim="password1" :class="[error.tipo === 'password' ? 'is-invalid' : '']">
        <button type="submit" class="btn btn-primary" :disabled="disabled">Ingresar</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    data(){
        return {
            email: '',
            password1 : ''
        }
    },
    computed: {
        ...mapState(['error']),
        disabled(){
            if(!this.email.includes('@')){
                return true
            }

            if(this.password1.length > 5 ){
                return false
            }
            return true

        }
    },
    methods : {
        ...mapActions(['loginUser']),
        async processForm(){
            await this.loginUser({email: this.email, password: this.password1})
            if(this.error.tipo !== null){
                return 
            }

            this.email =  ''
            this.password1 = ''
        }
    }
}
</script>

<style>

</style>