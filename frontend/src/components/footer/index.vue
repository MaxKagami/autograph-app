<template>
  <footer class='footer'>
    <b-container class='front'>
      <b-row class='footer_landing'>
        <b-col cols='3' class='footer_landing_left'>
          <div class='footer_landing_left_content'>
            <b-img :src="require('./cars.gif')"/>
            <p>У нас уже более</p>
            <p class="customers-number">{{ customers }}</p>
            <p>довольных абонентов по всей России</p>
          </div>
        </b-col>
        <b-col cols="6" class="footer_landing_center">
          <div class="footer_landing_center_content">
            <h4>Остались вопросы?</h4>
            <p>Закажите консультацию у специалиста!</p>
          </div>
        </b-col>
        <b-col cols="3" class="footer_landing_right">
          <b-form @submit='onsubmit' v-if='form_show' class='callback-form'>
            <b-row>
              <b-form-input class="squared margin-bottom dark-input"
                            v-model="form.name"
                            placeholder="Имя"
                            type="name"
                            size="sm"
                            required/>
            </b-row>
            <b-row>
              <b-form-input class="squared margin-bottom dark-input"
                            v-model="form.email"
                            placeholder="Email"
                            type="text"
                            size="sm"
                            required/>
            </b-row>
            <b-row>
              <b-form-input v-model='form.phone'
                            class='squared margin-bottom dark-input'
                            placeholder="Телефон"
                            type='phone'
                            size="sm"
                            required/>
              <b-form-checkbox v-model='form.consent' class='consent' value="true">
                Соглашаюсь на обработку персональных данных
              </b-form-checkbox>
              <b-button class='yellow-background'
                        block
                        size="sm"
                        type='submit'
                        variant='warning'>
                Заказать
              </b-button>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
      <b-row class='footer_menu'>
        <b-col cols='4' class='footer_menu_items'>
          <a class='footer_menu_items_link' href='#'>Оборудование</a>
          <ul>
            <li><a href='#'>Датчики уровня топлива</a></li>
            <li><a href='#'>Бытовые котроллеры</a></li>
            <li><a href='#'>Периферия</a></li>
            <li><a href='#'>Персональные трекеры</a></li>
            <li><a href='#'>Дисплеи водителя</a></li>
            <li><a href='#'>Тахографы</a></li>
            <li><a href='#'>Видеонаблюдение для транспорта</a></li>
          </ul>
        </b-col>
        <b-col cols='4' class='footer_menu_items'>
          <a class='footer_menu_items_link' href='#'>Услуги</a>
          <ul>
            <li><a href='#'>Контроль местоположения</a></li>
            <li><a href='#'>Контроль расхода топлива</a></li>
            <li><a href='#'>Перевод на наше обслуживание</a></li>
            <li><a href='#'>Видеонаблюдение для автотранспорта</a></li>
            <li><a href='#'>Диспетчеризация вашего автопарка</a></li>
            <li><a href='#'>Установка тахографов</a></li>
            <li><a href='#'>Замена блока НКМ (СКЗИ)</a></li>
          </ul>
        </b-col>
        <b-col cols='4' class='footer_menu_items'>
          <a class='footer_menu_items_link' href='#'>Статьи</a>
          <ul>
            <li><a href='#'>Одометр vs ГЛОНАСС: что точнее?</a></li>
            <li><a href='#'>3 способа контроля расхода топлива</a></li>
            <li><a href='#'>Нормы расхода топлива автомобилей КАМАЗ</a></li>
            <li><a href='#'>Все, что нужно знать о контроле качества вождения</a></li>
            <li><a href='#'>Как остаться «на плаву» в сельском хозяйстве?</a></li>
            <li><a href='#'>Путевые листы: шаблоны, примеры, пояснения</a></li>
            <li><a href='#'>Как обезопасить себя от воровства спецтехники?</a></li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="footer_bottom">
        <b-col cols='5'>
          <b-row class='footer_bottom_left'>
            ЦентГАЗ™ Ухта 2019. Администратор сайта:
            <a href="mailto:example@mail.com" class='footer_bottom_left_link'>example@mail.com</a>
          </b-row>
          <b-row class='footer_bottom_agreement'>
            <a href='#' class='footer_bottom_agreement_link'>Согласие на обработку персональных данных</a>
          </b-row>
        </b-col>
        <b-col cols='7'>
          <a href="#">
            <b-img :src="require('./vk-link.png')"/>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  resource: 'Footer',
  data: () => ({
    customers: '350 000',
    form: {
      name: '',
      phone: '',
      email: '',
      consent: false
    },
    form_show: true
  })
}
</script>

<style lang="sass">
  @import 'style.sass'
</style>
