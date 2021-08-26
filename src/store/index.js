import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const delay = (ms) => async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export default new Vuex.Store({
  state: {
    productList: [
      { name: "Casa", price: 100.0, color: "red", category: "inmueble", discount: 20, offer: true },
      { name: "Bote", price: 100.0, color: "green", category: "transporte", discount: 0, offer: false },
      { name: "Avión", price: 100.0, color: "blue", category: "transporte", discount: 0, offer: false },
      { name: "Motocicleta", price: 100.0, color: "royalblue", category: "transporte", discount: 10, offer: true },
      { name: "Computadora", price: 100.0, color: "black", category: "tecnología", discount: 20, offer: true },
      { name: "Silla", price: 100.0, color: "coral", category: "hogar", discount: 0, offer: false },
      { name: "Mesa", price: 100.0, color: "gold", category: "hogar", discount: 10, offer: true },
      { name: "Gato", price: 100.0, color: "orange", category: "mascota", discount: 0, offer: false },
      { name: "Café", price: 100.0, color: "brown", category: "hogar", discount: 0, offer: false },
      { name: "Parlante", price: 100.0, color: "grey", category: "tecnología", discount: 0, offer: false },
      { name: "Espejo", price: 100.0, color: "blueviolet", category: "hogar", discount: 10, offer: true },
      { name: "Bicicleta", price: 100.0, color: "aqua", category: "transporte", discount: 0, offer: false },
      { name: "Libro", price: 100.0, color: "yellow", category: "intelectual", discount: 20, offer: true },
      { name: "Plancha", price: 100.0, color: "fuchsia", category: "hogar", discount: 10, offer: true },
    ],
    carritoDeCompras: [],
    search: "",
  },
  getters: {
    productosPorFiltro(state) {
      return state.productList.filter(
        (product) => product.name === state.search || product.color === state.search || product.category === state.search
      );
    },
    //filteredProductList(state) {
    //  return state.productList.map((producto) => Object.values(producto).join('|'))
    //  .filter((item) => item.includes(state.search))
    //},
    sumaTotalPrecio(state) {
      return state.carritoDeCompras.reduce((accumulator, producto) => {
        accumulator = accumulator + (producto.price - (producto.price * producto.discount) / 100) * producto.qty
        return accumulator
      }, 0)
    },
  },
  mutations: {
    ADD_PRODUCT(state, producto) {
      state.productList.push(producto);
    },
    ADD_PRODUCT_TO_SHOPPING_CART(state, producto) {
      state.carritoDeCompras.push(producto);
    },
    REMOVE_PRODUCT_TO_SHOPPING_CART(state, productoIndex) {
      state.carritoDeCompras.splice(productoIndex, 1);
    },
    ADD_QTY_TO_SHOPPINGCART_ITEM(state, productIndex) {
      state.carritoDeCompras[productIndex].qty++;
    },
    SUB_QTY_TO_SHOPPINGCART_ITEM(state, productIndex) {
      state.carritoDeCompras[productIndex].qty--;
    },
    SET_BUSQUEDA(state, value) {
      state.search = value;
    },
  },
  actions: {
    async agregarProducto(context, newProduct) {
      await delay(1000)
      context.commit('ADD_PRODUCT' , { ...newProduct})
    },

    agregarProductoCarritoDeCompras(context, newProduct) {
      setTimeout(() => {
        alert("Producto agregado al carrito")
        const productIndexInShoppingCart = context.state.carritoDeCompras.findIndex((product) => {
        return product.name === newProduct.name && product.category === newProduct.category ? product : undefined
      })

      if(productIndexInShoppingCart >= 2) {
        context.commit('ADD_QTY_TO_SHOPPINGCART_ITEM', productIndexInShoppingCart)
      } else {
        context.commit('ADD_PRODUCT_TO_SHOPPING_CART', { ...newProduct, qty: 1}, 1000)
      }
      }, 1000);
    },

    agregarCantidadAlProductoDelCarritoDeCompras(context, indexProduct) {
      context.commit('ADD_QTY_TO_SHOPPINGCART_ITEM', indexProduct)
    },

    restarCantidadAlProductoDelCarritoDeCompras(context, indexProduct) {
      context.commit('SUB_QTY_TO_SHOPPINGCART_ITEM', indexProduct)
    },
  },
  modules: {},
});
