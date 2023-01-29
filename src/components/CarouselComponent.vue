<template>
    <carousel :itemsToShow="3.95" :wrapAround="true" :transition="5000" :autoplay="3000">
        <slide v-for="(slide, index) in homePaths" :key="index">
            <div class="col-6">
                <img class="carousel__item" :src="slide.path" :alt="slide.alt">
                <h3 class="text-white pt-2">{{ slide.info }}</h3>
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
                    path: 'img/moisturizer.png',
                    alt: 'moisturizer',
                    info: 'makeup',
                    id: 1,
                },
                {
                    path: 'img/makeup.png',
                    alt: 'makeup',
                    info: 'makeup',
                    id: 2,
                },
                {
                    path: 'img/eyeshadow.png',
                    alt: 'eyeshadow',
                    info: 'makeup',
                    id: 3,
                },
                {
                    path: 'img/eyeliner.png',
                    alt: 'eyeliner',
                    info: 'makeup',
                    id: 4,
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;
@import "../../node_modules/vue3-carousel/dist/carousel.css";
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