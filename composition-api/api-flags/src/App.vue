<template>
  <div class="container">
    <div class="alert alert-primary"><h1 class="text-center">Api Países</h1></div>
    <CardList />
  </div>
</template>

<script>

import CardList from './components/CardList.vue'
export default {
  name: 'App',
  components: {
    CardList
  }
}
</script>

<style>

</style>
