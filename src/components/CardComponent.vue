<template>
    <div class="d-flex text-white col-5 kard ">
        <div class="d-flex align-self-center">
            <img class="placeholder-img" src="../../public/img/logo.png" alt="">
            <!-- <img :src="`{{card.image_link}}`" alt=""> -->
        </div>

        <div class=" d-flex flex-column">
            <div class="d-flex justify-content-between">
                <h3>{{ card.name }}</h3>
                <h4>{{ card.price }}</h4>
            </div>
            <div class="description overflow-auto">
                <p>{{ card.description }}</p>
            </div>
            
        </div>
    </div>
</template>

<script>


export default {
    name: 'CardComponent',

    props: [
        'card'
    ],



    mounted() {
        
    }


}
</script>

<style lang="scss" scoped>

// .kard{
    
    
// }

.placeholder-img{
    transform: scale(0.6);
}

.description{
    height: 100px
}

</style>