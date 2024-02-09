<template>
  <div class="home">
    <Product msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  name: 'HomeView',
  components: {
    Product
  }
}
</script>
