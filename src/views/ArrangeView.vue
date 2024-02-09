<template>
  <h1 class="catalog">Оформленные заказы</h1>
  <div class="row">
    <div class="col-md-3" v-for="product in card">
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <h3>{{ product.name }}</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>{{product.description}}</p>
              <h4>${{ product.price}}</h4>
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
      console.log('Result: ', result)
    },
  }
}
</script>
<style>
.catalog{
  color: #ff00a9;
}
</style>