<template>
  <div>
    <b-carousel id="carousel-1"
                indicators
                :interval="3500"
                img-width="100%"
                img-height="392px">
      <b-carousel-slide :img-src="require('@/assets/home-carousel/1.jpg')"></b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/home-carousel/2.jpg')"></b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/home-carousel/3.jpg')"></b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/home-carousel/4.jpg')"></b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/home-carousel/5.jpg')"></b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/home-carousel/6.jpg')"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'home',
  resource: 'Home',
  data: () => ({
  }),
  created () {
  },
  methods: {
  }
}
</script>

<style></style>
