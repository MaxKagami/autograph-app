<template>
  <div></div>
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
  created() {
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
