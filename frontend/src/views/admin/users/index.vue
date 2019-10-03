<template>
  <div>
    <b-table :items="users"
             :fields="fields"
             hover
             bordered
             small
             no-border-collapse
             head-variant="dark">
      <template v-slot:cell(created_at)="data">
        {{ data.value | moment("DD/MM/YY HH:mm") }}
      </template>
      <template v-slot:cell(updated_at)="data">
        {{ data.value | moment("DD/MM/YY HH:mm") }}
      </template>
      <template v-slot:cell(actions)="row">
        <b-button class="user-actions" @click="row">1</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'users',
  resource: 'Users',
  data: () => ({
    fields: [
      { key: 'id', label: '№' },
      { key: 'email', label: 'E-mail' },
      { key: 'created_at', label: 'Создано' },
      { key: 'updated_at', label: 'Обновлено' },
      { kye: 'actions', label: 'Действия' }
    ],
    users: [ 'id', 'email', 'created_at', 'updated_at' ],
    error: ''
  }),
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/admin')
    } else {
      this.$http.secured.get('/api/v1/users')
        .then(response => { this.users = response.data })
        .catch(error => this.setError(error, 'Что-то пошло не так'))
    }
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    }
  }
}
</script>

<style lang="scss">
@import "styles";
</style>
