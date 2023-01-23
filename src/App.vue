<template>
  <header>
    <AppHeader></AppHeader>
  </header>

  <router-view></router-view>
    
  
  
</template>
<script>
import AppHeader from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    components:{
      AppHeader
    }
    
  }
</script>

<style lang="scss" scoped>
</style>