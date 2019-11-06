<template>
  <div class="contacts">
    <h1 class="header">Контакты</h1>
    <b-container>
      <h1>Главный офис отдела контроля транспорта "ЦентрГаз Ухта"</h1>
      <b-row class='contacts_row'>
        <b-col cols='1'><b-img :src="require('./1.png')" class='contacts_icons'/></b-col>
        <b-col cols='11'>
          <b-row>Адрес:</b-row>
          <b-row>169300, Республика Коми, г. Ухта, ул. Бушуева, д. 18</b-row>
        </b-col>
      </b-row>
      <b-row class='contacts_row'>
        <b-col cols="1"><b-img :src="require('./2.png')" class='contacts_icons'/></b-col>
        <b-col cols="11">
          <b-row>Телефон:</b-row>
          <b-row>8 8216 744-222 (вопросы и консультации)</b-row>
          <b-row>8 912 943 5044 (главный специалист Третьяков Михаил Егорович) </b-row>
        </b-col>
      </b-row>
      <b-row class='contacts_row'>
        <b-col cols="1"><b-img :src="require('./3.png')" class='contacts_icons'/></b-col>
        <b-col cols="11">
          <b-row>E-mail:</b-row>
          <b-row>support@centr-gaz.ru, control@centr-gaz.ru </b-row>
          <b-row>ctrgaz@yandex.ru</b-row>
        </b-col>
      </b-row>
    </b-container>
    <yandex-map :coords=uhta_position_coords
                :zoom=zoom
                style="width: auto; height: 30em;"
                :controls="['fullscreenControl', 'geolocationControl', 'zoomControl', 'rulerControl', 'trafficControl']">
      <ymap-marker :coords=office_coords
                   marker-type="placemark"
                   hint-content=""
                   :balloon-template="balloonTemplate"
                   :icon="{color: 'darkblue'}"
                   cluster-name="1">
      </ymap-marker>
      <ymap-marker :coords=service_coords
                   marker-type="placemark"
                   hint-content=""
                   :balloon="{header: 'СТО «Центр-Газ», ул. Железнодорожная 16а, ангар №49'}"
                   :icon="{color: 'darkblue'}"
                   cluster-name="1">
      </ymap-marker>
    </yandex-map>
    <b-container>
      <h1>Наши партнёры: ООО "Веста" </h1>
      <b-row class='contacts_row'>
        <b-col cols='1'><b-img :src="require('./1.png')" class='contacts_icons'/></b-col>
        <b-col cols='11'>
          <b-row>Адрес:</b-row>
          <b-row>168220, Республика Коми, Сыктывдинский р-он, с. Выльгорт, ул. Шоссейная, д. 50 в</b-row>
        </b-col>
      </b-row>
      <b-row class='contacts_row'>
        <b-col cols='1'><b-img :src="require('./2.png')" class='contacts_icons'/></b-col>
        <b-col cols="11">
          <b-row>Телефон:</b-row>
          <b-row>8 82130 7-18-14 (вопросы и консультации) </b-row>
          <b-row>8 904 223 9252 (начальник отдела Яруллин Дамир Ирикович)</b-row>
        </b-col>
      </b-row>
      <b-row class='contacts_row'>
        <b-col cols='1'><b-img :src="require('./3.png')" class='contacts_icons'/></b-col>
        <b-col cols="11">
          <b-row>E-mail:</b-row>
          <b-row>vesta.elena@mail.ru</b-row>
        </b-col>
      </b-row>
    </b-container>
    <yandex-map :coords=syk_position_coords
                :zoom=zoom
                style="width: auto; height: 30em;"
                :controls="['fullscreenControl', 'geolocationControl', 'zoomControl', 'rulerControl', 'trafficControl']">
      <ymap-marker :coords=partner_coords
                   marker-type="placemark"
                   hint-content=""
                   :balloon="{header: 'Мастерская ООО «Веста»'}"
                   :icon="{color: 'darkblue'}"
                   cluster-name="1">
      </ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  name: 'contacts',
  resource: 'Contacts',
  components: { yandexMap, ymapMarker },
  data: () => ({
    zoom: '14',
    uhta_position_coords: [63.562364, 53.711493],
    syk_position_coords: [61.627376, 50.794068],
    office_coords: [63.567307, 53.698907],
    service_coords: [63.558561, 53.718859],
    partner_coords: [61.630460, 50.793725]
  }),
  computed: {
    balloonTemplate () {
      return `
      <h1>Отдел контроля транспорта «ЦентрГаз Ухта»</h1>
      <h5>3-ий этаж (вход с центрального крыльца)</h5>
      <img src="http://www.centr-gaz.ru/images/c-gaz-mag/shop-b.jpg" style="width: 50%; height: 50%">
    `
    }
  }
}
</script>

<style lang="sass">
  @import "style.sass"
</style>
