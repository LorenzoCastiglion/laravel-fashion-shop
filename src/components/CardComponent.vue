<template>
    <div class="d-flex text-white">
       <div>
        <img :src="`{{card.image_link}}`" alt="">
       </div>
   
        {{ card.name }}
        {{ card.price }}
    </div>
</template>

<script>


    export default {
        name:'CardComponent',

        props:[
            'card'
        ],
           
        

        mounted(){
            console.log(this.card)
        }


    }
</script>

<style lang="scss" scoped>

</style>