<template>
    <div class="box">
          <div>
              <!-- <TextAnimation></TextAnimation> -->
          </div>
          
          <div class="m-auto col-8 pt-4">
                      <TeamAnimation/>
                    </div>
                    
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
            <CardTeamComponent></CardTeamComponent>
            <CarouselAbout></CarouselAbout>
    </div>
    
    
    
        
    </template>
    
    <script>
    import CarouselAbout from '../components/CarouselAbout.vue';
    import TextAnimation from '../components/TextAnimation.vue';
    import CardTeamComponent from '../components/CardTeamComponent.vue';
    import TeamAnimation from '../components/TeamAnimation.vue';
        export default {
            
            name:'About',
    
            components:{
                TextAnimation,
                CarouselAbout,
                CardTeamComponent,
                TeamAnimation
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
    