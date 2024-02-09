<template>
  <div class="login">
    <h1 class="catalog">Авторизация</h1>
    <form @submit.prevent="login"><br>
      Email <input v-model="email"><br>
      Password <input v-model="password"><br>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      url: 'https://jurapro.bhuser.ru/api-shop',
      FIO:'',
      email:'',
      password:'',
    }
  },
  methods:{
    async login(){
      const User={
        email: this.email,
        password: this.password
      }
        const response = await fetch(this.url + '/login',{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(User)
        })
      if(response.ok){
        const result = await response.json();
        localStorage.setItem('userToken', result.data.user_token)
        console.log('Result: ', result)
        console.log('Response: ', response);
        this.$router.push('/')
      }else{
        console.error('Custom error', error)
        alert('Не правильная почта или пароль')
      }

    }
  }
}

</script>
<style>
.catalog{
  color: #ff00a9;
}
</style>
