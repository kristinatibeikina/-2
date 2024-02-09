<template>
  <h1 class="catalog">Оформленные заказы</h1>
  <router-link to="/" class="back">Назад</router-link> |
  <div class="row">
    <div class="col-md-3" v-for="product in card "  :key="product.id">
      <div class="container">
        <div class="card">
          <div class="face face2 face8">
            <div class="content">
              <h3>Заказ № {{ product.id }}</h3>
              <p>Товары: {{ product.products}}</p>
              <h4>Общая цена: ${{ product.order_price}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  data(){
    return{
      url: 'https://jurapro.bhuser.ru/api-shop',
      card:[],
    }
  },
  created() {
    this.completedCard()
  },
  methods:{
    async completedCard(){ //Отображение оформленных заказов
      const userToken = localStorage.getItem('userToken');
      const response = await fetch(this.url + '/order',{
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`
        }
      });
      const result = await response.json();
      this.card = result.data
      this.card.order_price * this.countCard
      console.log('Result: ', result)
    },
  }
}
</script>
<style>
.catalog{
  color: #ff00a9;
}
.container .card .face.face8{
  transform: translateY(50px);
}
</style>