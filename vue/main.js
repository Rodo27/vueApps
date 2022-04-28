const app =  Vue.createApp({

    data(){
        return {
            titulo : "Mi Banco con Vue.js",
            cantidad : 600,
            enlace : 'https://youtube.com/bluuweb',
            estado: false, 
            servicios : ['transferencias','pagos','giros','cheques'],
            desactivar :false
        }
    },
    methods : {
        agregarSaldo(){
            this.cantidad = this.cantidad + 100;
        },
        disminuirSaldo(valor){
            if (this.cantidad === 0) {
                alert('Saldo en 0');
                this.desactivar = true;
                return
            }
            this.cantidad = this.cantidad - valor;
        }
    },
    computed : {
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger';
        },
        mayuscularTexto(){
            return this.titulo.toUpperCase();
        }
    }
})
