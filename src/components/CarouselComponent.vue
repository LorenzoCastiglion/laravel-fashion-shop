<template>
    <carousel :itemsToShow="1" :wrapAround="true" :transition="1000" :autoplay="1500">
        <slide v-for="(slide, index) in homePaths" :key="index">
            <div class="">
                <img class="carousel__item" :src="slide.path" :alt="slide.alt">
                <h3 class="text-white pt-2 text-center">{{ slide.info }}<span class="dot">.</span></h3>
            </div>
        </slide>

        <template #addons>
            <navigation />
        </template>
    </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
    name: 'CarouselComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data: function () {
        return {

            homePaths: [
                {
                    path: 'img/cream.png',
                    alt: 'moisturizer',
                    info: 'cream',
                    id: 1,
                },
                {
                    path: 'img/makeup.png',
                    alt: 'makeup',
                    info: 'makeup',
                    id: 2,
                },
                {
                    path: 'img/brushes.png',
                    alt: 'eyeshadow',
                    info: 'brushes',
                    id: 3,
                },
                {
                    path: 'img/eyeliner.png',
                    alt: 'eyeliner',
                    info: 'eyeliner',
                    id: 4,
                },
                {
                    path: 'img/lipstick.png',
                    alt: 'lipstick',
                    info: 'lipstick',
                    id: 5,
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;
@import "../../node_modules/vue3-carousel/dist/carousel.css";


.dot{
    color: $red;
    font-size: 30px;
    
}
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}

img {
    width: 120px;
}





</style>