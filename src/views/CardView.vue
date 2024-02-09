<template>
  <h1 class="catalog">Корзина</h1>
  <div class="row">
    <div class="col-md-3" v-for="product in cart">
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
              <button type="submit" @click="deleteCard(product)">Удалить</button>
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
      cart: [],
    }
  },
  created() {
    this.viewCard()
  },
  methods: {
    async deleteCard(product){
      const userToken = localStorage.getItem('userToken');
      const url = `https://jurapro.bhuser.ru/api-shop/cart/${product.id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`
        }
      });
      if (response.ok) {
        alert("Товар успешно удален!")
        console.log("Товар успешно удален!");
        location.reload();
        const data = await response.json();
        console.log(data.data.message);
      } else {
        console.error("Ошибка удаления товара из корзины:", response.statusText);
      }

    },

      async viewCard(){
        const userToken = localStorage.getItem('userToken');
        const response = await fetch(this.url + '/cart',{
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userToken}`
          }
        });
        const result = await response.json();
        this.cart=result.data
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