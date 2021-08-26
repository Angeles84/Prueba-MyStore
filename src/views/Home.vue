<template>
  <div class="home container">
    <h1 class="my-5">Bienvenido</h1>
    <label for="" class="mr-2">Buscador por nombre</label>
    <input type="text" class="mr-1" :value="$store.state.search"
      @input="$store.commit('SET_BUSQUEDA_NAME', $event.target.value)">
   
    <ul v-if=" $store.getters.productoPorName.length > 0">
      <li v-for="(producto, index) in $store.getters.productoPorName" :key="index" :style="{color: producto.color}">
        <label>Nombre: {{producto.name}} | precio: {{producto.price}} | color: {{producto.color}} | categoría: {{producto.category}}</label>
      </li>
    </ul> 
    <ul v-else>
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
</style>