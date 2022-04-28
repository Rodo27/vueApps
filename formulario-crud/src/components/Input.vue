<template>
  <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">
    <div class="form-check form-check-inline">
      <input type="checkbox" class="form-check-input" id="check-1" v-model="tarea.categorias" value="javascript">
      <label for="check-1" class="form-check-label">Javascript</label>
    </div>
    <div class="form-check form-check-inline">
      <input type="checkbox" class="form-check-input" id="check-2" v-model="tarea.categorias" value="nodejs">
      <label for="check-2" class="form-check-label">Node.js</label>
    </div>
    <div class="mt-2">
      <div class="form-check form-inline">
        <input type="radio" class="form-check-input" id="radio-1" v-model="tarea.estado" value="urgente">
        <label for="radio-1" class="form-check-label">Urgente</label>
      </div>
      <div class="form-check form-inline">
        <input type="radio" class="form-check-input" id="radio-2" v-model="tarea.estado" value="relax">
        <label for="radio-2" class="form-check-label">Relax</label>
      </div>
    </div>
    <div class="mt-2">
      <input type="number" class="form-control" v-model="tarea.numero">
    </div>
    <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="desabilitarBoton">Procesar</button>
</template>

<script>
export default {
    props : {
        tarea: Object
    },
    computed : {
    desabilitarBoton(){
      return this.tarea.nombre.trim() === "" ? true : false ;
    }
  },
}
</script>
