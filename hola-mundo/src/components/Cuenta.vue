<template>
    <h1>Tipo de cuenta: {{cuenta}}</h1>
    <h2>Saldo: {{saldo}}</h2>
    <h2>Cuenta {{ estado ? 'Activa' : 'Desactivada'}}</h2>
    <hr>
    <div v-for="(servicio,index) in servicios" :key="index">
        {{index +1}} --- {{servicio}}
    </div>
    <AccionSaldo texto="Aumentar Saldo" @accion="aumentar" />
    <AccionSaldo texto="Disminuir Saldo" @accion="disminuir" :desactivar="desactivar"/>   
</template>

<script>
import AccionSaldo from './AccionSaldo.vue'

export default {
    data() {
        return {
            saldo: 1000,
            cuenta : 'Visa',
            estado: false,
            servicios : ['giro', 'abono', 'transferencia'],
            desactivar : false
        }
    },
    components: {
        AccionSaldo
    },
    methods : {
        aumentar(){
            this.saldo = this.saldo + 100;
            this.desactivar = false
        },
        disminuir(){

            if(this.saldo === 0){
                alert('Saldo Agotado')
                this.desactivar = true
                return
            }
            this.saldo = this.saldo - 100;
        }
    }
}
</script>

<style>

</style>