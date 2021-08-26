<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-4" v-for="(producto, index) in $store.state.productList" :key="index">
        <div class="card my-3" style="width: 18rem;">
          <img src="../assets/product.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{producto.name}}</h5>
            <p class="card-subtitle">$ {{producto.price}}</p>
            <p class="card-text mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <button class="btn btn-danger" @click="$store.dispatch('agregarProductoCarritoDeCompras' , producto)">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comprar",
  data: () => ({

  }),
  methods: {
    
  },
};
</script>