<template>
  <div>
    <b-container>
      <h1 class="header">Офис в г. Ухта</h1>
      <b-row>
        <b-col>
          <b-row><h1>Контакты отдел контроля транспорта "Центр-Газ"</h1></b-row>
          <b-row>
            <b-col cols="2"><b-img :src="require('./1.png')"/></b-col>
            <b-col cols="10">
              <b-row>Компания:</b-row>
              <b-row>ЦентрГАЗ Ухта</b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"><b-img :src="require('./1.png')"/></b-col>
            <b-col cols="10">
              <b-row>Адрес:</b-row>
              <b-row>169300, Республика Коми, г. Ухта, ул. Бушуева, д. 14</b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"><b-img :src="require('./2.png')"/></b-col>
            <b-col cols="10">
              <b-row>Телефон:</b-row>
              <b-row>8 (8216) 744-222</b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"><b-img :src="require('./3.png')"/></b-col>
            <b-col cols="10">
              <b-row>E-mail:</b-row>
              <b-row>control@centr-gaz.ru</b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <yandex-map :coords="coords"
                      zoom="16.2"
                      style="width: auto; height: 30em;"
                      :controls="['fullscreenControl', 'geolocationControl', 'zoomControl', 'rulerControl', 'trafficControl']">
            <ymap-marker :coords="coords"
                         marker-type="placemark"
                         hint-content=""
                         :balloon="{header: 'Отдел контроля транспорта «Центр-Газ», тел. 8 (8216) 744-222'}"
                         :icon="{color: 'darkblue'}"
                         cluster-name="1">
            </ymap-marker>
          </yandex-map>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  name: 'contacts',
  resource: 'Contacts',
  components: { yandexMap, ymapMarker },
  data: () => ({
    coords: [63.566747, 53.699541]
  })
}
</script>

<style lang="scss">
  @import "styles";
</style>
