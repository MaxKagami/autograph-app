<template>
  <b-modal id="addingModal"
           title="Новая статья"
           size="xl"
           hide-footer>

    <div class="text-red" v-if="error">{{ error }}</div>

    <template v-slot:modal-header="{ close }">
      <div class="ml-auto">
        <b-button type="submit"
                  class="font-weight-bold"
                  size="sm"
                  variant="outline-warning"
                  squared>
          Опубликовать</b-button>
        <b-button @click="close()"
                  class="font-weight-bold"
                  size="sm"
                  variant="outline-danger"
                  squared>
          Отмена
        </b-button>
      </div>
    </template>

    <b-form @submit.prevent="addArticle">
      <b-form-group id="input-group-title"
                    label="Заголовок"
                    label-for="input-title">
        <b-form-input id="input-title" v-model="newArticle.title"/>
      </b-form-group>

      <b-form-group id="input-group-subtitle"
                    label="Подзаголовок"
                    label-for="input-subtitle">
        <b-form-input id="input-subtitle" v-model="newArticle.subtitle"/>
      </b-form-group>

      <div v-if="!image">
        <b-form-file @change="onFileChange"
                     v-model="image"
                     placeholder="Выберите изображение или перетащите его сюда..."
                     drop-placeholder="Перетащите файл сюда..."/>
      </div>
      <div v-else>
        <b-button @click="removeImage"
                  block
                  squared
                  variant="danger">
          Удалить изображение
        </b-button>
        <img :src="image"/>
      </div>

      <editor/>
    </b-form>

  </b-modal>
</template>

<script>
export default {
  name: 'new-article',
  data: () => ({
    newArticle: [],
    image: '',
    error: ''
  }),
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    addArticle () {
      const value = this.newArticle
      if (!value) {
        return
      }
      this.$http.secured.post('/api/v1/articles/', { article:
        {
          title: this.newArticle.title,
          subtitle: this.newArticle.subtitle,
          text: this.newArticle.text,
          image: this.newArticle.image,
          date: this.newArtice.date
        }
      })
        .then(response => {
          this.articles.push(response.data)
          this.newArticle = ''
        })
        .catch(error => this.setError(error, 'Невозможно создать статью'))
    },
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      // var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    }
  }
}
</script>

<style lang="scss">
  @import "styles";
</style>
