<template>
  <div id="admin-articles">

    <h1 class="d-inline">Публикации</h1>

    <b-button v-b-modal.addingModal
              id="admin-articles-add"
              class="d-inline font-weight-bold"
              size="sm"
              variant="warning"
              squared>
      <v-icon name="plus"/>
      Добавить
    </b-button>

    <New/>

    <b-table :items="articles"
             :fields="fields"
             hover
             bordered
             small
             no-border-collapse
             head-variant="dark">

      <template v-slot:cell(date)="data">
        {{ data.value | moment("DD/MM/YY HH:mm") }}
      </template>

      <template v-slot:cell(action1)="row">
        <b-button class="mr-1 font-weight-bold"
                  variant="light"
                  size="sm"
                  squared
                  @click="info(row.item, $event.target)">
          <v-icon name="edit" class="colour-black"/>
        </b-button>
      </template>

      <template v-slot:cell(action2)="row">
        <b-button class="mr-1 font-weight-bold"
                  variant="light"
                  size="sm"
                  squared>
          <v-icon name="times" class="colour-red"/>
        </b-button>
      </template>

    </b-table>

    <b-modal :id="infoModal.id"
             :title="infoModal.title"
             ok-only @hide="resetInfoModal"
             size="xl"
             header-bg-variant="dark"
             hide-footer>
      <template v-slot:modal-header="{ close }">
        <div class="ml-auto">
          <b-button size="sm"
                    variant="outline-warning"
                    squared
                    @click="close()">
            Редактировать
          </b-button>
          <b-button size="sm"
                    variant="outline-warning"
                    squared
                    @click="close()">
            Закрыть
          </b-button>
        </div>
      </template>
      <pre>{{ infoModal.content }}</pre>
    </b-modal>

  </div>
</template>

<script>
import New from './new'
export default {
  name: 'admin-articles',
  components: { New },
  data: () => ({
    fields: [
      { key: 'id', label: '№' },
      { key: 'date', label: 'Дата публикации' },
      { key: 'title', label: 'Заголовок' },
      { key: 'subtitle', label: 'Подзаголовок' },
      { key: 'action1', label: '' },
      { key: 'action2', label: '' }
    ],
    infoModal: {
      id: 'info-modal',
      title: '',
      content: ''
    },
    articles: [ 'id', 'title', 'subtitle', 'date' ],
    newArticle: [],
    error: ''
  }),
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/signin')
    } else {
      this.$http.secured.get('/api/v1/articles')
        .then(response => { this.articles = response.data })
        .catch(error => this.setError(error, 'Что-то пошло не так'))
    }
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    removeArticle (article) {
      this.$http.secured.delete(`/api/v1/articles/${article.id}`)
        .then(response => { this.records.splice(this.records.indexOf(article), 1) })
        .catch(error => this.setError(error, 'Невозможно удалить статью'))
    },
    info (item, button) {
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal () {
      this.infoModal.title = ''
      this.infoModal.content = ''
    }
  }
}
</script>

<style lang="sass">
@import "style.sass"
</style>
