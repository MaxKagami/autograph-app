<template>
  <div>

      <h1 class="d-inline">Публикации</h1>
      <b-button size="sm"
                class="d-inline font-weight-bold"
                variant="warning"
                squared>
        <v-icon name="plus"/>
        Добавить
      </b-button>

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

      <template v-slot:cell(actions)="row">
        <b-button class="mr-1 font-weight-bold"
                  variant="warning"
                  size="sm"
                  squared
                  @click="info(row.item, $event.target)">
          Показать
        </b-button>
        <b-button class="mr-1 font-weight-bold"
                  variant="danger"
                  size="sm"
                  squared>
          Удалить
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
export default {
  name: 'admin-articles',
  data: () => ({
    fields: [
      { key: 'id', label: '№' },
      { key: 'date', label: 'Дата публикации' },
      { key: 'title', label: 'Заголовок' },
      { key: 'subtitle', label: 'Подзаголовок' },
      { key: 'actions', label: 'Действия' }
    ],
    infoModal: {
      id: 'info-modal',
      title: '',
      content: ''
    },
    articles: [ 'id', 'title', 'subtitle', 'date' ],
    error: ''
  }),
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/admin')
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

<style>
@import "styles.scss";
</style>
