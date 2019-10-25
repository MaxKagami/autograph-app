<template>
  <div class="blog_index">
    <h1 class="header color-yellow">Новости и статьи по теме ГЛОНАСС мониторинга и тахографии</h1>
    <b-container>
      <div class="blog_item" v-for="article in articles" :key="article">
        <b-row>
          <b-col class="col_left">
            <b-img :src="getImageURL(article.image)"/>
            <span>{{ article.date | moment("DD.MM.YYYY") }}</span>
          </b-col>
          <b-col class="col_right">
            <h3>{{ article.title }}</h3>
            <p>{{ article.subtitle }}</p>
            <p>
              <router-link :to="{ name: 'article', params: { id: article.id } }">
                Подробнее
              </router-link>
            </p>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'articles',
  resource: 'Articles',
  data: () => ({
    articles: [],
    isLoading: false
  }),
  mounted () {
    this.getArticles()
  },
  methods: {
    async getArticles () {
      this.isLoading = true
      const { data } = await this.$axios(this.$configs.articles.articles_resource)
      this.isLoading = false
      this.articles = data
    },
    getImageURL (path) {
      return (this.$configs.backendUrl + '/articles/images/' + path)
    }
  }
}
</script>

<style lang="sass">
  @import "style.sass"
</style>
