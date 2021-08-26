<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <router-link to="/" class="pt-1 pr-3 my-store">MyStore</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav pl-5">
          <router-link to="/" class="pt-1 pr-3">Home</router-link>
          <router-link to="/products" class="pt-1 pr-3">Productos</router-link>
          <router-link to="/newproduct" class="pt-1 pr-3">Nuevo producto</router-link>
          <router-link to="/comprar" class="pt-1">Comprar</router-link> 
          <router-link to="/carrito" class="">
            <img src="@/assets/favicon.png" alt="" srcset="">
            <span>{{$store.state.carritoDeCompras.length}}</span>
          </router-link> 
        </div>
      </div>
    </nav>
      
    <transition name="vista" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
  nav .my-store {
    color: #292929;
    font-weight: 700;
    font-size: 1.3rem;
  }
  nav .my-store:hover {
    color: #6b6b6b;
    transition: all 0.4s ease;
  }
  nav a {
    color: brown;
    font-weight: 600;
  }
  nav a:hover {
    text-decoration: none;
    color: #e97171;
    transition: all 0.4s ease;
  }
  img {
    width: 1.1rem;
    margin-left: 1.2rem;
    padding-top: 0.3em;
    transition: all 0.4s ease;
  }
  img:hover {
    opacity: 0.65;
  }
  .vista-enter-active, .vista-leave-active {
    transition: opacity .3s;
  }
  .vista-enter, .vista-leave-to{
    opacity: 0;
  }

</style>
