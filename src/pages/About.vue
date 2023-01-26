<template>
    
        <div class="box">
            
                <TextAnimation></TextAnimation>
            
        </div>
    
</template>

<script>
import TextAnimation from '../components/TextAnimation.vue';
    export default {
        
        name:'About',

        components:{
TextAnimation
        },

        data(){
            return{

            }
        },


        method:{

        }
    }
</script>

<style lang="scss" scoped>
.box{
    height: 700px;
    
}



</style>