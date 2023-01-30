<template>
     
    <div class=" text-center " >
        <img class="gif-container" :src="gifUrl" onerror="this.src='../../public/img/txt-logo.png'">
    </div>

</template>

<script>
import gifUrl from '../../src/gifs/jumbo.gif';
    export default {
        
        name:'JumboComponent',

        data(){
            return{
                gifUrl
            }
        }
    }
</script>

<style lang="scss" scoped>


.gif-container{
   width: 95%;
    height: 370px;
}

</style>