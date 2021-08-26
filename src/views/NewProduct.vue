<template>
  <div class="div-form py-4 px-5">
    <form @submit.prevent="handleFormSubmit">
    <label for="">Nombre del producto</label>
    <input type="text" class="form-control" v-model="form.name" required />
    
    <label for="">Precio del producto</label>
    <input type="number" class="form-control" v-model.number="form.price" required />
  
    <label for="" >Categoría</label>
    <select name="" class="form-control"  id="" v-model="form.category" required>
      <option value="transporte">Transporte</option>
      <option value="inmueble">Hogar</option>
      <option value="tecnología">Tecnología</option>
      <option value="mascota">Mascota</option>
      <option value="otro">Otro</option>
    </select>
    
    <label for="">Color</label>
    <input type="color" class="form-control" v-model="form.color" required>
    
    <label for="" class="mr-2">Oferta</label>
    <input type="checkbox" v-model="form.offer">
    <input type="number" class="form-control" min="1" max="100" v-model.number="form.discount">
    
    <button type="submit" class="btn btn-dark mb-4">Guardar</button>
  </form>
  </div>
</template>

<script>
export default {
  name: "NewProduct",
  data: () => ({
    form: {
      name: "",
      price: null,
      color: "",
      category: "",
      discount: null, 
      offer: false,  
    }
  }),
  methods: {
    handleFormSubmit() {
      setTimeout(() => {
        this.$store.dispatch('agregarProducto' , this.form)
        this.$router.push('/products')
      }, 1000);
    }
  },
};
</script>

<style scoped>
  .div-form {
    background-color: #e49292;
  }
  label {
    margin-bottom: 0.1em;
  }
  input , select {
    margin-bottom: 1em;
  }
  input[type=checkbox] {
    margin-bottom: 0.1em;
  }
</style>
