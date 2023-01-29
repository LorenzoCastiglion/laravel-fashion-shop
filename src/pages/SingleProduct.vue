<template>

    <div class="container my-2">
        <section class="prod d-flex align-items-center" v-if="product">
            <div class="d-flex gap-5 align-items-center">
                <div class="img-container col-4   overflow-hidden d-flex align-items-center">
                    <img :src="`http://localhost:5173/storage/app/${product.image}`" alt="">
                </div>
                <div class="col-lg-6    flex-column ">
                    <div class="d-flex justify-content-between ">
                        <div class="mb-3">
                            <h2 class="prod-name m-0">{{ product.name }}</h2>
                            <a class="prod-brand  text-capitalize"
                                :href="`https://www.${trim(product.brand.name)}.com`">{{
                                    product.brand.name
                                }}</a>

                        </div>
                        <div class="d-flex pe-3 ">
                            <h3 class="prod-price ">{{ product.price }}</h3>
                            <h4 class="prod-price-sign ps-2 ">{{ product.price_sign }}</h4>
                        </div>
                    </div>
                    <div>
                        <p class="text-white">{{ product.description }}</p>
                        <p class="text-white m-0">Texture: {{ product.texture.name }}</p>
                    </div>
                    <div class="text-end">
                        <a class="text-white text-decoration-none hover-underline-animation" href="">
                            <router-link to="/store" active-class="active" class="nav-link text-white nav-link ">
                                <i class="fa-solid fa-arrow-left"></i>
                                Back to <span class=" dot">/</span> Store<span class=" dot">.</span>
                            </router-link>
                        </a>
                    </div>

                </div>


            </div>
        </section>
        <section class="loader" v-else>
            <div class="d-flex  justify-content-center ">
                <div>
                    <img class="load-img" src="../../public/img/logo.png" alt="">
                    <div class="progress-loader mt-5">
                        <div class="progress"></div>
                    </div>
                </div>


            </div>

        </section>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SingleProduct',

    data() {
        return {
            store,
            product: null
        }
    },

    methods: {
        getProduct() {
            axios.get(`${this.store.apiBaseUrl}/products/${this.$route.params.slug}`).then((response) => {
                console.log(response.data.results)
                if (response.data.success) {
                    this.product = response.data.results;
                } else {
                    this.$router.push({ name: 'notfound' })
                }
            })

        },

        trim(str) {
            str = str.replace(/\s+/g, "");
            return str

        }
    },

    mounted() {
        setTimeout(
            this.getProduct, 1500
        )

    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;


.dot {
    color: $red;
    font-size: 30px;

}

.loader {
    height: calc(100vh - 373px);
}

.load-img {
    width: 400px;
}

.progress-loader {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 200px;
  background: rgba(236, 236, 238, 0.253);
  height: 10px;
  border-radius: 7px;
}

.progress {
  width: 1px;
  height: 10px;
  border-radius: 7px;
  background: $red;
  transition: 0.5s;
  animation: loading_44 3s ease infinite;
}

@keyframes loading_44 {
  0% {
    width: 0%;
  }

  50% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
}

.prod {
    height: calc(100vh - 373px)
}

.prod-name,
.prod-price-sign,
.prod-price {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: $red;
}

.prod-price {
    font-size: 40px;
}

.prod-name {
    font-size: 50px;
}

.prod-brand {
    font-size: 24px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: white;
    text-decoration: underline $red;
    transition: 0.5s;

    &::after {
        font-family: Arial, Helvetica, sans-serif;
        display: none;
        content: ' go to site';
        margin-left: 5px;
        font-size: 15px;
        transition: 0.5s;
    }


    &:hover::after {
        display: inline-block;

    }

}

.img-container {
    border: solid 1px $red;
    background-color: white;
    width: 350px;
    height: 350px;
    border-radius: 50%;


}

img {
    width: 100%;
    transform: scale(0.5);
    object-fit: contain;
    object-position: center;
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
</style>