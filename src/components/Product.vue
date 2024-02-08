<template>
  <div id="app" class="container my-5">
    {{ inCart }}
    <div class="row">
      <div class="col-md-3" v-for="product in data">

        <div class="card">
          <h4 class="card-title">{{ product.name }}</h4>
          <p> {{product.description}}</p>
          <div class="card-text">${{ product.price}}</div>
          <div class="row justify-content-end">
            <button class="btn btn-primary" @click="addToCart(invId)">Add to cart</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      "data": [
        {
          "id": 1,
          "name": "Product name 1",
          "description": "Product description 1",
          "price": 100
        },
        {
          "id": 2,
          "name": "Product name 2",
          "description": "Product description 2",
          "price": 200
        }
      ],

      inCard: [],
    };
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
  },
};
</script>
<style>
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img{
  width: 200px;
  height: 200px;
}
</style>