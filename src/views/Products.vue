<template>
  <div class="container mt-5">
    <h2>Nuestros productos</h2>
    <ul class="mt-5">
      <li v-for="(producto, $index) in $store.state.productList" :key="$index" :style="{color: producto.color}">
        Nombre: {{producto.name}} | color: {{producto.color}} | categoría: {{producto.category}} | precio: ${{producto.price}} |
        {{producto.offer ? `${producto.discount}%` : ''}}
      </li>
  </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
