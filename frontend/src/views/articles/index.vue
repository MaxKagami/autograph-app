<template>
  <div class="blog">
    <h1 class="header color-yellow">Новости и статьи по теме ГЛОНАСС мониторинга и тахографии</h1>
    <div v-for="article in articles" :key="article">
      <b-row>
        <b-col>
          <b-img :src="getImageURL(article.image)"/>
          <span>{{ article.date }}</span>
        </b-col>
        <b-col>
          <h3>{{ article.title }}</h3>
          <p>{{ article.subtitle }}</p>
          <p>
            <a href="">Подробнее</a>
          </p>
        </b-col>
      </b-row>
    </div>
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
    this.getArticles(this.$configs.articles.articles_resource)
  },
  methods: {
    async getArticles (url) {
      this.isLoading = true
      const { data } = await this.$axios(url)
      this.isLoading = false
      this.articles = data
    },
    getImageURL (path) {
      return (this.$configs.frontendUrl + path)
    }
  }
}
</script>
