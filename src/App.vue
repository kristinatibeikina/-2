<template>
  <nav>
    <router-link to="/" class="p">Каталог товаров</router-link> |
    <span v-if="!isAuthenticated">
    <router-link to="/registration" class="p">Регистрация</router-link> |
    <router-link to="/login" class="p">Авторизация</router-link> |
    </span>
    <span v-if="isAuthenticated">
    <router-link to="/card" class="p">Корзина</router-link> |
    <router-link to="/arrange" class="p">Оформленные заказы</router-link> |
      <router-link to="/" class="p" @click="logoutUser">Выход</router-link> |
    </span>


  </nav>
  <router-view/>
</template>
<script >
import Product from "@/components/Product.vue";

export default {

  data() {
    return {
      url: 'https://jurapro.bhuser.ru/api-shop',
      count:0
    };
  },
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('userToken');
    }
  },
  methods: {
    async logoutUser(){
      const response = await fetch(this.url + '/logout',{
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      localStorage.removeItem('userToken');
      location.reload();
      this.$router.push('/');
      const result = await response.json();
      console.log('message: ', result)
    },

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
}

nav {

  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #9eabb7;

}

nav a.router-link-exact-active {
  color: #42b983;
}
.p{
  font-size: 21px;
}
</style>
