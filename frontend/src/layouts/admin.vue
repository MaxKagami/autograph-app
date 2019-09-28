<template>
  <main>
    <sidebar-menu :menu="menu"/>
    <router-view id="admin"/>
  </main>
</template>

<script>
export default {
  name: 'Admin',
  data: () => ({
    menu: [
      {
        href: 'admin',
        title: 'Панель',
        icon: 'fa fa-user'
      }
    ]
  })
}
</script>
