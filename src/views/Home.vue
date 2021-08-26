<template>
  <div class="home container">
    <h1 class="my-5">Bienvenido</h1>
    <label for="" class="mr-2 mb-0">Buscador por nombre, color o categoría</label>
    <input type="text" class="mr-1" :value="$store.state.search"
      @input="$store.commit('SET_BUSQUEDA', $event.target.value)">
    <br>
    <small>Ej: Casa, blue o transporte</small>
   
    <ul class="mt-4" v-if=" $store.getters.productosPorFiltro.length > 0">
      <li v-for="(producto, index) in $store.getters.productosPorFiltro" :key="index" :style="{color: producto.color}">
        <label>Nombre: {{producto.name}} | color: {{producto.color}} | categoría: {{producto.category}} | precio: ${{producto.price}}</label>
      </li>
    </ul> 
    <ul class="mt-3" v-else>
      <li><label>...</label></li>
    </ul>
  </div> 
</template>

<script>
export default {
  name: "Home",
  
};
</script>

<style scoped>
  button {
    font-size: 0.85em;
    margin-bottom: 0.36em;
  }
  small {
    color: grey;
  }
</style>