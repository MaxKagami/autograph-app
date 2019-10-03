<template>
  <div id="signin">
    <form @submit.prevent="signin" class="form-signin">
      <h1 class="form-signin-heading text-muted">Авторизация</h1>
      <div class="text-red" v-if="error">{{ error }}</div>
      <input type="email" v-model="email" class="form-control" placeholder="Email">
      <input type="password" v-model="password" class="form-control" placeholder="Пароль">
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Войти
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created () {
    this.checkSignedIn()
  },
  updated () {
    this.checkSignedIn()
  },
  methods: {
    signin () {
      this.$http.plain.post('/signin', { email: this.email, password: this.password })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error))
    },
    signinSuccessful (response) {
      if (!response.data.csrf) {
        this.signinFailed(response)
        return
      }
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/admin')
    },
    signinFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || ''
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/admin')
      }
    }
  }
}
</script>

<style>
  @import "styles.scss";
</style>
