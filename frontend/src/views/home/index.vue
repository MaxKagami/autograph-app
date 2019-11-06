<template>
  <div id='home'>
    <b-carousel id="home_carousel"
                indicators
                :interval="3500"
                img-width="100%"
                img-height="392px">
      <b-carousel-slide :img-src="require('./carousel/1.jpg')"/>
      <b-carousel-slide :img-src="require('./carousel/2.jpg')"/>
      <b-carousel-slide :img-src="require('./carousel/3.jpg')"/>
      <b-carousel-slide :img-src="require('./carousel/4.jpg')"/>
      <b-carousel-slide :img-src="require('./carousel/5.jpg')"/>
      <b-carousel-slide :img-src="require('./carousel/6.jpg')"/>
    </b-carousel>
    <div class="content-container">
      <b-row>
        <b-col cols="8">
          <h1 class="header color-red">Система глонасс/gps мониторинга транспорта "автограф"</h1>
          <p>Рады приветствовать вас на нашем сайте!<br>Здесь Вы можете узнать много полезной информации
            о системе "АвтоГРАФ", понять чем она выделяется на фоне прочих производителей, ознакомится с политикой
            компании "ТехноКом" (разработчика "АвтоГРАФ"), оценить функциональные характеристики системы,
            а также возможности развития этого перспективного направления.</p>
        </b-col>
        <b-col cols="4" class="center">
          <b-embed src="https://www.youtube.com/embed/s6HrqsRqxyU"
                   type="iframe"
                   allowfullscreen/>
        </b-col>
      </b-row>
    </div>
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

<style lang="sass">
  @import "style.sass"
</style>
