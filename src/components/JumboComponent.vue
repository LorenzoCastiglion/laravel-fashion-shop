<template>
     
    <div >
        
        <img :src="gifUrl" onerror="this.src='../../public/img/txt-logo.png'">
    </div>
</template>

<script>
import gifUrl from '../../public/gifs/jumbo.gif';
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

</style>