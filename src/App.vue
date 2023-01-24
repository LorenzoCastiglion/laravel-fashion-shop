<template>
  <header>
    <AppHeader></AppHeader>
  </header>

  <router-view></router-view>
    
  <AppFooter></AppFooter>
  
</template>
<script>
import AppHeader from './components/HeaderComponent.vue';
import AppFooter from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components:{
      AppHeader,
      AppFooter,
    }
    
  }
</script>

<style lang="scss" scoped>
</style>