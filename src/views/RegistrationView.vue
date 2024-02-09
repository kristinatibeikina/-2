<template>

  <div class="form-wrapper form-w">
    <h1 class="cat">Регистрация</h1>
    <form @submit.prevent="registration">
      <div class="form-item">
        <label for="FIO"></label>
        <input type="text" v-model="email" class="input" name="email" required="required" placeholder="Email Address">
      </div>
      <div class="form-item">
        <label for="email"></label>
        <input type="email" class="input" v-model="email" name="email" required="required" placeholder="Email Address">
      </div>
      <div class="form-item">
        <label for="password"></label>
        <input type="password" class="input" v-model="password" name="password" required="required" placeholder="Password">
      </div>
      <div class="button-panel">
        <input type="submit" class="button" title="Sign In" value="Отправить">
      </div>
    </form>
      <router-link to="/" class="back">Назад</router-link>
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
      if (response.ok) {
        this.$router.push('/login'); // Перенаправляем пользователя на авторизацию
      } else {
        this.error = "Ошибка при регистрации";
        console.error('Ошибка:', this.error);
      }

    }
  }
}


</script>
<style>

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);

/* fontawesome */
@import url(http://weloveiconfonts.com/api/?family=fontawesome);
[class*="fontawesome-"]:before {
  font-family: 'FontAwesome', sans-serif;
}

/* Simple Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }

.form-w{
  height: 414px;
}

/* Form Layout */
.form-wrapper {

  margin: 3em auto;
  padding-top: 0px;
  max-width: 370px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8)
}

h1 {
  text-align: center;
  padding: 1em 0;
}
.back{
  display: block;
  color: blueviolet;
  margin-top: 10px;
  font-size: 20px;
  text-decoration: none;
}
form {
  padding: 0 1.5em;
}

.form-item {
  margin-bottom: 0.75em;
  width: 100%;
}

.form-item input {
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #e9e9e9;
  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  height: 50px;
  transition: border-color 0.3s;
  width: 100%;
}

.form-item input:focus {
  border-bottom: 2px solid #c0c0c0;
  outline: none;
}

.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
  background: #49b65f;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
  width: 100%;
  margin-bottom: 10px;
}

.button:hover {
  background: #ff00a9;
}

.form-footer {
  font-size: 1em;
  padding: 2em 0;
  text-align: center;
}

.form-footer a {
  color: #8c8c8c;
  text-decoration: none;
  transition: border-color 0.3s;
}

.form-footer a:hover {
  border-bottom: 1px dotted #8c8c8c;
}
.input{

  background: transparent;
  border-bottom: 2px solid #a09c9c;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 24px;
  padding: 6px;
  transition: .1s;
}
.cat{
  color: #fafafa;
}
</style>