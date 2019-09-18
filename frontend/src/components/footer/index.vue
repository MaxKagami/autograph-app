<template>
  <footer>
    <b-container class="front">
      <b-row class="footer-landing">
        <b-col cols="3" class="left">
          <b-img :src="require('./cars.gif')"></b-img>
          <p>У нас уже более</p>
          <p class="customers-number">{{ customers }}</p>
          <p>довольных абонентов по всей России</p>
        </b-col>
        <b-col cols="6" class="center">
          <div class="">
            <h4>Остались вопросы?</h4>
            <p>Закажите косультацию у специалиста!</p></div>
        </b-col>
        <b-col cols="3">
          <b-form @submit="onsubmit">
            <b-row>
              <b-form-input class="squared margin-bottom dark-input"
                            v-model="name"
                            placeholder="Имя"
                            type="name"
                            required/>
            </b-row>
            <b-row>
              <b-form-input class="squared margin-bottom dark-input "
                            v-model="email"
                            placeholder="Email"
                            type="text"
                            required/>
            </b-row>
            <b-row>
              <b-form-input class="squared margin-bottom dark-input "
                            v-model="phone"
                            placeholder="Телефон"
                            type="phone"
                            required/>
              <b-button class="yellow-background"
                        block
                        type="submit"
                        variant="warning">
                Заказать
              </b-button>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
      <b-row class="footer-menu">
        <b-col cols="4">
          <b-row>Оборудование</b-row>
          <b-row>Датчики уровня топлива</b-row>
          <b-row>Бытовые котроллеры</b-row>
          <b-row>Периферия</b-row>
          <b-row>Персональные трекеры</b-row>
          <b-row>Дисплеи водителя</b-row>
          <b-row>Тахографы</b-row>
          <b-row>Видеонаблюдение для транспорта</b-row>
        </b-col>
        <b-col cols="4">
          <b-row>Услуги</b-row>
          <b-row>Контроль местоположения</b-row>
          <b-row>Контроль расхода топлива</b-row>
          <b-row>Перевод на наше обслуживание</b-row>
          <b-row>Видеонаблюдение для автотранспорта</b-row>
          <b-row>Диспетчеризация вашего автопарка</b-row>
          <b-row>Установка тахографов</b-row>
          <b-row>Замена блока НКМ (СКЗИ)</b-row>
        </b-col>
        <b-col cols="4">
          <b-row>Статьи</b-row>
          <b-row>Одометр vs ГЛОНАСС: что точнее?</b-row>
          <b-row>3 способа контроля расхода топлива</b-row>
          <b-row>Нормы расхода топлива автомобилей КАМАЗ</b-row>
          <b-row>Все, что нужно знать о контроле качества вождения</b-row>
          <b-row>Как остаться «на плаву» в сельском хозяйстве?</b-row>
          <b-row>Путевые листы: шаблоны, примеры, пояснения</b-row>
          <b-row>Как обезопасить себя от воровства спецтехники?</b-row>
        </b-col>
      </b-row>
      <b-row class="footer-bottom">
        <b-col>
          <b-row>
            ЦентГАЗ Ухта 2019. Администратор сайта:
            <a href="mailto:example@mail.com">example@mail.com</a>
          </b-row>
          <b-row>
            <a href="">Согласие на обработку персональных данных</a>
          </b-row>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  resource: 'Footer',
  data: () => ({
    customers: '350 000'
  })
}
</script>

<style lang="scss">
@import 'styles.scss';
</style>
