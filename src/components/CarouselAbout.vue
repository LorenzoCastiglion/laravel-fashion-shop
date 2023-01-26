<template>
    
          <div class="col-12 text-center">
              <div class="section-title ">
                    <h4 class="title mt-4 text-white">Our main sponsor</h4>
                    
                </div>
            </div>
        
    <div class="container mb-5">
    <carousel :itemsToShow="3.95" :wrapAround="true" :transition="5000" :autoplay="3000">
        <slide v-for="(slide, index) in homePaths" :key="index">
            <div class="col-6">
                <img class="carousel__item" :src="slide.path" :alt="slide.alt">
            </div>
        </slide>

        
    </carousel>
    </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
    name: 'CarouselAbout',
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
                    path: 'img/boolean.png',
                    alt: 'boolean',
                    info: 'makeup',
                    id: 1,
                },
                {
                    path: 'img/dior.png',
                    alt: 'dior',
                    info: 'makeup',
                    id: 2,
                },
                {
                    path: 'img/douglas.png',
                    alt: 'douglas',
                    info: 'makeup',
                    id: 3,
                },
                {
                    path: 'img/kiko-milano.png',
                    alt: 'Kiko Milano',
                    info: 'makeup',
                    id: 4,
                },
                {
                    path: 'img/mac.png',
                    alt: 'Mac',
                    info: 'makeup',
                    id: 5,
                },
                {
                    path: 'img/sephora.png',
                    alt: 'Sephora',
                    info: 'makeup',
                    id: 6,
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
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