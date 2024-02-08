<template>
  <div class="login">
    <h1>Регистрация</h1>
    <form @submit.prevent="registration"><br>
      FIO <input v-model="FIO"><br>
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
    async registration(){
      const User={
        fio: this.FIO,
        email: this.email,
        password: this.password
      }

      const response = await fetch(this.url + '/signup',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(User)
      });
      console.log('Response: ', response);
      const result = await response.json();
      console.log('Result: ', result)
      this.$router.push('/login')

    }
  }
}


</script>