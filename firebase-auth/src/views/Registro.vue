<template>
    <h1 class="my-5">Registro de Usuarios</h1>
    <div class="alert alert-danger" v-if="error.tipo !== null">{{error.mensaje}}</div>
    <form @submit.prevent="processForm">
        <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email" :class="[error.tipo === 'email' ? 'is-invalid' : '']">
        <input type="password" placeholder="password" class="form-control my-2" v-model.trim="password1">
        <input type="password" placeholder="password" class="form-control my-2" v-model.trim="password2" di>
        <button type="submit" class="btn btn-primary" :disabled="disabled">Registrar</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    data(){
        return {
            email: '',
            password1 : '',
            password2: ''
        }
    },
    computed: {
        ...mapState(['error']),
        disabled(){
            if(!this.email.includes('@')){
                return true
            }

            if(this.password1.length > 5 && this.password1 === this.password2){
                return false
            }
            return true

        }
    },
    methods : {
        ...mapActions(['registerUser']),
        async processForm(){
            await this.registerUser({email: this.email, password: this.password1})
            if(this.error.tipo !== null){
                return 
            }
            this.email =  ''
            this.password1 = ''
            this.password2 = ''
        }
    }
}
</script>

<style>

</style>