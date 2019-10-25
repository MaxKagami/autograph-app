<template>
  <div id="users">

    <h1 class="d-inline">Пользователи</h1>

    <b-button v-b-modal.addingModal
              id="users-add"
              class="d-inline font-weight-bold"
              size="sm"
              variant="warning"
              squared>
      <v-icon name="plus"/>
      Добавить
    </b-button>
    <New/>

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
      <template v-slot:cell(action1)="row">
        <b-button class="mr-1 font-weight-bold"
                  variant="light"
                  size="sm"
                  squared>
          <v-icon name="edit" class="colour-black"/>
        </b-button>
      </template>
      <template v-slot:cell(action2)="row">
        <b-button @click="removeUser(row.item)"
                  class="mr-1 font-weight-bold"
                  variant="light"
                  size="sm"
                  squared>
          <v-icon name="times" class="colour-red"/>
        </b-button>
      </template>
    </b-table>

  </div>
</template>

<script>
import New from './new'
export default {
  name: 'users',
  resource: 'Users',
  components: { New },
  data: () => ({
    fields: [
      { key: 'id', label: '№' },
      { key: 'email', label: 'E-mail' },
      { key: 'created_at', label: 'Создано' },
      { key: 'updated_at', label: 'Обновлено' },
      { key: 'action1', label: '' },
      { key: 'action2', label: '' }
    ],
    users: [ 'id', 'email', 'created_at', 'updated_at' ],
    error: ''
  }),
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('signin')
    } else {
      this.$http.secured.get('/api/v1/users')
        .then(response => { this.users = response.data })
        .catch(error => this.setError(error, 'Что-то пошло не так'))
    }
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    removeUser (user) {
      if (confirm('Удалить эту запись?')) {
        this.$http.secured.delete(`/api/v1/users/${user.id}`)
          .then(response => { this.records.splice(this.records.indexOf(user), 1) })
          .catch(error => this.setError(error, 'Невозможно удалить аккаунт'))
      }
    }
  }
}
</script>

<style lang="sass">
  @import "style.sass"
</style>
