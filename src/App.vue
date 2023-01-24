<template>
  <header>
    <AppHeader></AppHeader>
  </header>

  <router-view></router-view>
    
  <footer>
<AppFooter></AppFooter>
  </footer>
  
</template>
<script>
import AppHeader from './components/HeaderComponent.vue';
import AppFooter from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components:{
      AppHeader,
     AppFooter
    }
    
  }
</script>

<style lang="scss" scoped>
</style>