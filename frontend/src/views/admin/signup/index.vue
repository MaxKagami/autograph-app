<template>
  <div id="signup">
    <form @submit.prevent="signup" class="form-signup">
      <h1 class="form-signup-heading text-muted">Регистрация</h1>
      <div class="text-red" v-if="error">{{ error }}</div>
      <input type="email" v-model="email" class="form-control" placeholder="Email">
      <input type="password" v-model="password" class="form-control" placeholder="Пароль">
      <input type="password" v-model="password_confirmation" class="form-control" placeholder="Повторите пароль">
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Войти
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      error: ''
    }
  },
  created () {
    this.checkedSignedIn()
  },
  updated () {
    this.checkedSignedIn()
  },
  methods: {
    signup () {
      this.$http.plain.post('/signup', { email: this.email, password: this.password, password_confirmation: this.password_confirmation })
        .then(response => this.signupSuccessful(response))
        .catch(error => this.signupFailed(error))
    },
    signupSuccessful (response) {
      if (!response.data.csrf) {
        this.signupFailed(response)
        return
      }
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/admin')
    },
    signupFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || 'Что-то пошло не так'
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkedSignedIn () {
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
