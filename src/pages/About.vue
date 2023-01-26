<template>
    <div class="box">
          <TextAnimation></TextAnimation>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
            <CardTeamComponent></CardTeamComponent>
            <CarouselAbout></CarouselAbout>
    </div>
    
    
    
        
    </template>
    
    <script>
    import CarouselAbout from '../components/CarouselAbout.vue';
    import TextAnimation from '../components/TextAnimation.vue';
    import CardTeamComponent from '../components/CardTeamComponent.vue';
        export default {
            
            name:'About',
    
            components:{
                TextAnimation,
                CarouselAbout,
                CardTeamComponent
            },
    
            
            data: function() {
                return{
                }
            },
    
    
            method:{
    
            }
        }
    </script>
    
    <style lang="scss" scoped>
    
    
    
    
    </style>
    