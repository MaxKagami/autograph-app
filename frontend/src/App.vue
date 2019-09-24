<template>
  <div id="app">
    <comment :is="layout"/>
  </div>
</template>

<script>
const defaultLayout = 'public'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>
