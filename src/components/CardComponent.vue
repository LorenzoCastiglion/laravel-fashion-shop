<template>
    <div class="d-flex text-white col-lg-5 col-md-12 kard  ">
        <div class="d-flex align-self-center img-container col-4 overflow-hidden mx-3">
            <!-- <img class="placeholder-img" src="../../public/img/logo.png" alt=""> -->
            <img class="img" :src="`http://localhost:5173/storage/app/${card.image}`" alt="">
        </div>

        <div class=" d-flex flex-column">
            <div class="d-flex justify-content-between">

                <router-link 
                            :to="{ name: 'singleproduct', params: { slug: card.slug } }">
                            <h3 class="prod-name hover-underline-animation ">{{ card.name }}</h3>
                        </router-link>
                
                <div class="d-flex">
                    <h4>{{ card.price_sign }}&nbsp;</h4>
                    <h4 class=" fw-bold fs-3">{{ card.price }}</h4>
                </div>
                
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
@use './../assets/styles/partials/variables' as *;

.prod-name{
    color: $red ;
    font-weight: 700;
    letter-spacing: -0.03em;
}


.hover-underline-animation {
    display: inline-block;
    position: relative;

    

}

.hover-underline-animation:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $red;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}


.img-container{
    border: solid 1px $red;
    box-shadow: inset 10px 10px 50px $red;
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.img{
   width: 100%;
   transform: scale(1);
   
   object-fit: contain;
   object-position: center;
}

.placeholder-img{
    transform: scale(0.6);
}

.description{
    height: 100px
}

</style>