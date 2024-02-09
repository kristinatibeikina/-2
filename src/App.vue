<template>
  <nav>
    <router-link to="/" class="p">Каталог товаров</router-link> |
    <router-link to="/registration" class="p">Регистрация</router-link> |
    <router-link to="/login" class="p">Авторизация</router-link> |
     <router-link to="/login" class="p">Выход</router-link>

  </nav>
  <router-view/>
</template>
<script >
export default {
  methods: {

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

</style>
