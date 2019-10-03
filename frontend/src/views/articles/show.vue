<template>
  <div>
    <b-container>
      <b-img :src="getImageURL(article.image)"/>
      <h1>{{ article.title }}</h1>
      <span v-html="article.text"/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'article',
  resource: 'Article',
  props: ['id'],
  data: () => ({
    article: [],
    isLoading: false
  }),
  created () {
    this.getArticle(this.id)
  },
  methods: {
    async getArticle (id) {
      this.isLoading = true
      const { data } = await this.$axios(this.$configs.articles.articles_resource + id)
      this.isLoading = false
      this.article = data
    },
    getImageURL (path) {
      return (this.$configs.backendUrl + '/articles/images/' + path)
    }
  }
}
</script>

<style lang="scss">
  @import "styles";
</style>
