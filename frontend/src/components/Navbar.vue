<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand to="/">
          <img class="img-fluid" :src="require('@/assets/logo.png')"/>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"/>
        <div class="flex-column">
          <b-navbar-nav class="nav-upper">
            <b-nav-item></b-nav-item>
          </b-navbar-nav>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mr-auto nav-lower">
              <b-nav-item to="/equipments">Оборудование</b-nav-item>
              <b-nav-item>Услуги</b-nav-item>
              <b-nav-item to="/articles">Статьи</b-nav-item>
              <b-nav-item to="/blanks">Бланки заявок</b-nav-item>
              <b-nav-item to="/downloads">Загрузки</b-nav-item>
              <b-nav-item to="/contacts">Контакты</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  resource: 'Navbar'
}
</script>

<style>
</style>
