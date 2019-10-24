<template>
  <b-modal id="addingModal"
           title="Добавление аккаунта"
           size="sm"
           hide-footer>

    <div class="text-red" v-if="error">{{ error }}</div>

    <template v-slot:modal-header="{ close }">
      <div class="ml-auto">
        <b-button type="submit"
                  class="font-weight-bold"
                  size="sm"
                  variant="outline-light"
                  squared>
          OK</b-button>
        <b-button @click="close()"
                  class="font-weight-bold"
                  size="sm"
                  variant="outline-light"
                  squared>
          <v-icon name="times" class="colour-red"/>
        </b-button>
      </div>
    </template>

    <b-form @submit.prevent="addUser">
      <b-form-input id="input-email" v-model="newUser.email" placeholder="E-mail"/>
      <b-form-input id="input-password" v-model="newUser.password" placeholder="Пароль"/>
      <b-form-input id="input-password-confirmation" v-model="newUser.password_confirmation" placeholder="Повторите пароль"/>
    </b-form>

  </b-modal>
</template>
<script>
export default {
  data: () => ({
    newUser: [],
    error: ''
  }),
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    addUser () {
      const value = this.newUser
      if (!value) {
        return
      }
      this.$http.secured.post('/api/v1/users/', { user:
        {
          email: this.newUser.email,
          password: this.newUser.password,
          password_confirmation: this.newUser.password_confirmation
        }
      })
        .then(response => {
          this.users.push(response.data)
          this.newUser = ''
        })
        .catch(error => this.setError(error, 'Невозможно создать аккаунт'))
    }
  }
}
</script>
<style lang="scss">
  @import "style";
</style>
