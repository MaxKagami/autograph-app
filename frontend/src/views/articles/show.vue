<template>
  <div class="blog_show">
    <div class="cover">
      <b-img :src="getImageURL(article.image)"/>
      <div class="cover__carrier loaded"></div>
      <div class="cover__filter"></div>
      <b-container>
        <h1>{{ article.title }}</h1>
        <span>{{ article.subtitle }}</span>
      </b-container>
    </div>
    <div class="content">
      <span v-html="article.text"/>
    </div>
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
      const { data } = await this.$axios(this.$configs.articles.articles_resource + '/' + id)
      this.isLoading = false
      this.article = data
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
