<template>
  <main>
    <Navbar/>
    <router-view/>
    <Footer/>
  </main>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  name: 'Public',
  components: { Navbar, Footer }
}
</script>
