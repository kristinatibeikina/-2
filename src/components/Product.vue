<template>
  <div id="app" class=" my-5">
    <h1 @click="getProduct" class="catalog">Каталог товаров</h1>
    <div class="row">
      <div class="col-md-3" v-for="product in inCard">
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
                <button type="submit" @click="addCard(product.id)">Add to Cart</button>
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
  name: 'app',
  data() {
    return {
      url: 'https://jurapro.bhuser.ru/api-shop',
      inCard: [],
    };
  },
  methods: {
    async getProduct(){
      const response = await fetch(this.url + '/products',{
        method: 'GET',
        headers:{
          'content-type': 'application/json',
        },
      });
      const result = await response.json();
      this.inCard=result.data
      console.log('Result: ', result)
    },
    async addCard(id){
      this.product_id=id
      const response = await fetch(this.url + /cart/+ this.product_id,{
        method: 'POST'
      });
      const result = await response.json();
      console.log('Result: ', result)
    }
  },


};
</script>
<style>
body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: consolas;
}
.row{
  display: grid;
  grid-template-columns: repeat(3, 400px);
  margin-left: 60px;
}
.container{
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.container .card{
  position: relative;
  cursor: pointer;
}
h4{
  margin-top: 5px;
  margin-bottom: 0px;
}
.container .card .face{
  width: 300px;
  height: 200px;
  transition: 0.5s;
}
.catalog{
  color: #ff00a9;
}
.container .card .face.face1{
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.container .card:hover .face.face1{
  background: #ff00a9;
  transform: translateY(0);
}

.container .card .face.face1 .content{
  opacity: 0.2;
  transition: 0.5s;
}

.container .card:hover .face.face1 .content{
  opacity: 1;
}

.container .card .face.face1 .content img{
  max-width: 100px;
}

.container .card .face.face1 .content h3{
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}

.container .card .face.face2{
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
}

.container .card:hover .face.face2{
  transform: translateY(0);
}

.container .card .face.face2 .content p{
  margin: 0;
  padding: 0;
}

.container .card .face.face2 .content a{
  margin: 15px 0 0;
  display:  inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
}

.container .card .face.face2 .content a:hover {
  background: #333;
  color: #fff;
}
</style>