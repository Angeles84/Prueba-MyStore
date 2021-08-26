<template>
  <div class="container mt-5">
    <h1 class="mb-3">Carrito</h1>
     <div class="carta p-4">
      <p v-for="(product , $index) in $store.state.carritoDeCompras" :key="$index">
        <label for="">Nombre: {{product.name}} | Precio: ${{product.price}} | {{product.offer ? `${product.discount}%` : ''}}</label>

        <button class="ml-2 btn btn-secondary py-1 px-2" 
          @click="$store.dispatch('restarCantidadAlProductoDelCarritoDeCompras' ,$index)" :disabled="product.qty === 1">-</button>
        {{product.qty}}
        <button class="btn btn-secondary py-1 px-2" 
          @click="$store.dispatch('agregarCantidadAlProductoDelCarritoDeCompras' , $index)">+</button>

        <button class="btn btn-outline-secondary py-1 ml-4 eliminar" type="button" 
          @click="eliminarProducto($index)">Eliminar</button>
      </p>
      <hr>
      <p class="mt-4 mb-0" v-if="$store.state.carritoDeCompras.length > 0">Monto total de tu compra: <b>$ {{$store.getters['sumaTotalPrecio']}}</b></p>
      <p v-else>No tienes productos en tu carrito</p>
    </div>  

    <button class="btn btn-danger mt-2" @click="comprar">Comprar</button>
  </div>
</template>

<script>
export default {
  name: "Carrito",
  data: () => ({
    contador: 1,
  }),
  methods: {
    eliminarProducto(index) {
      this.$store.state.carritoDeCompras.splice(index, 1); 
    },
    comprar() {
      setTimeout(() => {
        alert('Compra realizada con éxito')    
        setTimeout(() => {
          this.$store.state.carritoDeCompras = [] 
        }, 1000);  
      }, 1000);
  }
  },
  
};
</script>

<style scoped>
  .carta {
    border: 1px solid gray;
    width: 70%;
  }
  .eliminar {
    font-size: 0.8em;
  }
</style>