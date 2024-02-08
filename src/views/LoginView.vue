<template>
  <div class="login">
    <h1>Авторизация</h1>
    <form @submit.prevent="login()"><br>
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
      try{
        const response = await fetch(this.url + '/login',{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(User)
        })

        const result = await response.json();
        console.log('Result: ', result)
        console.log('Response: ', response);
        this.$router.push('/')
      }catch (error){
        console.error('Custom error', error)

      }

    }
  }
}

</script>