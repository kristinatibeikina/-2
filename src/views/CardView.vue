<template>
  <h1 class="catalog">Корзина </h1>
  <div class="row">
    <div class="col-md-3" v-for="product in cart ">
      <div class="container">
        <div class="card">
          <div class="face face1 face3 fo">
            <div class="content">
              <h3>{{ product.name }}</h3>
            </div>
          </div>
          <div class="face face2 content-bloc face3">
            <div class="content ">
              <p>{{product.description}}</p>
              <h4>${{ product.price}}</h4>
              <div>{{countCard}}</div>
              <button @click="addCount" class="btn-count btn-count-right">+</button>
              <button @click="deleteCount" class="btn-count">-</button>
              <div class="button-panel delete-btn">
                <input type="submit" class="button button-card" @click="deleteCard(product)" value="Удалить">
              </div>
              <div class="button-panel arrange-btn">
                <input type="submit" class="button button-card" @click="arrangeCard"  value="Оформить">
              </div>
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
      countCard:1
    }
  },
  created() {
    this.viewCard()
  },
  methods: {

    async deleteCard(product){ //Удаление карточек товаров
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
        location.reload(); //Перезагружаем страницу
        const data = await response.json();
        console.log(data.data.message);
      } else {
        console.error("Ошибка удаления товара из корзины:", response.statusText);
      }

    },

      async viewCard(){ //Отображение карточек
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
    async arrangeCard(){ //Оформление товара
      const userToken = localStorage.getItem('userToken');
      const response = await fetch(this.url + '/order',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`
        }
      });
      if(response.ok){
        alert('Товар оформлен')
        console.log('Товар оформлен')
        const result = await response.json();
      }else {
        alert('Ошибка при добавление товара')
        console.log('Ошибка при добавление товара')
      }

    },
    addCount() {
      this.countCard++;
      this.saveLocalStorage();

    },
    deleteCount() {
      if (this.countCard > 1) {
        this.countCard--;
        this.saveLocalStorage();
      }
    },
    saveLocalStorage() {
      localStorage.setItem('quantity', JSON.stringify(this.countCard));
    }
  }
}

</script>
<style>
.delete-btn{

}
.arrange-btn{
  margin-top: 20px;
}
.container .card .face3{
  width: 300px;
  height: 400px;
  transition: 0.5s;
}
.container .card .face.fo{
  transform: translateY(300px);
  transition: 0.5s;
}
.btn-count{
  width: 30px;
  height: 30px;
  background: #49b65f;
  color: #fafafa;
  border: none;
}
.catalog{
  color: #ff00a9;
}
.btn-count-right{
  margin-right: 20px;
}

</style>