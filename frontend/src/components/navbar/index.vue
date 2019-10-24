<template>
    <b-navbar toggleable="sm" type="dark" class="uppercase">

      <b-navbar-brand to='/centr-gaz' id='centr-gaz-link'>
        <img :src="require('./logo2.png')"/>
      </b-navbar-brand>
      <b-tooltip target='centr-gaz-link'
                 variant='warning'
                 placement='left'>
        Перейти на сайт магазина <strong>«ЦентрГАЗ Ухта»</strong>
      </b-tooltip>

      <b-navbar-brand to="/">
        <img class="img-fluid" :src="require('./logo1.png')"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"/>

      <div class="flex-column">
        <b-navbar-nav class='nav-upper'>
          <b-nav-item class='font-phone' :href="'callto:' + phone_merged">{{ phone }}</b-nav-item>
          <b-nav-item class='font-email' :href="'mailto:' + email">{{ email }}</b-nav-item>
          <b-button to='/admin' variant='outline-warning' size='sm' squraed>Войти в личный кабинет</b-button>
        </b-navbar-nav>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto nav-lower font-nav">
            <b-nav-item-dropdown to="/equipments">
              <template slot="button-content">
                <v-icon name="cog"/>
                Оборудование
              </template>
              <b-dropdown-item>Датчики уровня топлива</b-dropdown-item>
              <b-dropdown-item>Бортовые котроллеры</b-dropdown-item>
              <b-dropdown-item>Периферия</b-dropdown-item>
              <b-dropdown-item>Персональные трекеры</b-dropdown-item>
              <b-dropdown-item>Дисплеи водителя</b-dropdown-item>
              <b-dropdown-item>Тахографы</b-dropdown-item>
              <b-dropdown-item>Видеонаблюдение для транспорта</b-dropdown-item>
              <b-dropdown-item>Датчики расхода топлива</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown>
              <template slot="button-content">
                <v-icon name="user-cog"/>
                Услуги
              </template>
              <b-dropdown-item>Контроль местоположения</b-dropdown-item>
              <b-dropdown-item>Конроль расхода топлива</b-dropdown-item>
              <b-dropdown-item>Перевод на наше обслуживание</b-dropdown-item>
              <b-dropdown-item>Видеонаблюдение для автотранспорта</b-dropdown-item>
              <b-dropdown-item>Диспетчеризация вшего автопарка</b-dropdown-item>
              <b-dropdown-item>Установка тахографов</b-dropdown-item>
              <b-dropdown-item>Замена блока НКМ (СКЗИ)</b-dropdown-item>
              <b-dropdown-item>Оформление карт водителя</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/articles" class="d-inline">
              <v-icon name="newspaper"/>
              Статьи
            </b-nav-item>
            <b-nav-item to="/blanks">
              <v-icon name="copy"/>
              Бланки заявок
            </b-nav-item>
            <b-nav-item to="/downloads">
              <v-icon name="file-download"/>
              Загрузки
            </b-nav-item>
            <b-nav-item to="/contacts">
              <v-icon name="info"/>
              По "автограф"</b-nav-item>
            <b-nav-item to="/contacts">
              <v-icon name="address-card"/>
              Контакты
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>

    </b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  resource: 'Navbar',
  data: () => ({
    phone: '(8 8216) 744-222',
    phone_merged: '+78216744222',
    email: 'control@centr-gaz.ru'
  })
}
</script>

<style lang="sass">
 @import "style.sass"
</style>
