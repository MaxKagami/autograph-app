<template>
  <main>
    <Navbar/>
    <router-view id="app"/>
    <Footer/>
  </main>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components: { Navbar, Footer }
}
</script>
