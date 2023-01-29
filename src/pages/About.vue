<template>
    <div class="box overflow-auto">
          <div>
              <!-- <TextAnimation></TextAnimation> -->
          </div>
          <h1 class="text-center fw-bold text-white">
            MEET THE TEAM <span class="dot">.</span>
          </h1>
          <div class="m-auto col-8 my-4">
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
    @use './../assets/styles/partials/variables' as *;
    
    .dot{
        color: $red;
        font-size: 80px;
    }

    h1{
        font-size: 70px;
        transition: 0.5s;
    }

    h1:hover{
       
    text-shadow: 8px 8px 18px $red;
    }
    
    
    </style>
    