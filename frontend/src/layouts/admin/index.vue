<template>
  <div id="admin" :class="[{'collapsed' : collapsed}]">
    <div class="admin">
      <router-view/>
      <sidebar-menu :menu="menu"
                    :collapsed="collapsed"
                    @toggle-collapse="onToggleCollapse"
                    @item-click="onItemClick"/>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  name: 'Admin',
  data: () => ({
    menu: [
      {
        href: '/admin/dashboard',
        title: 'Консоль',
        icon: 'fas fa-tachometer-alt'
      },
      {
        href: '/admin/articles',
        title: 'Посты новостей',
        icon: 'far fa-newspaper'
      },
      {
        href: '/admin/users',
        title: 'Пользователи',
        icon: 'fas fa-users'
      }
    ],
    collapsed: true
  }),
  mounted () {
    if (!localStorage.signedIn) {
      this.$router.replace('/signin')
    }
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
      // console.log(event)
      // console.log(item)
    }
  }
}
</script>

<style lang="sass">
  @import "style.sass"
</style>
