<template>
    <div class="container ">
        <!-- SELECT PER TIPO-->
        <div class="filter mb-4 ">
            <!-- @change="getProductsByType"> -->
<div class="d-flex">
    
                <div class=" d-flex flex-column">
                    <p class="text-white m-0"> Type</p>
                    <select v-model="selectedType" class="me-3 bg-transparent text-white ">
                        <option v-for="(type, index) in types" :key="index" :value="type.id">
                            {{ type.name }}
                        </option>
                    </select>
                </div>
    
                <!-- SELECT PER BRAND-->
                <!-- @change="getProductsByBrands"> -->
                <div  class=" d-flex flex-column">
                    <p class="text-white m-0"> Brand</p>
                    <select v-model="selectedBrand" class="me-3 bg-transparent text-white">
                        
                        <option v-for="(brand, index) in brands" :key="index" :value="brand.id">
                            {{ brand.name }}
                        </option>
                    </select>
                </div>

                <button @click="getProduct()"><span>Search <i class="fa-solid fa-magnifying-glass"></i> </span></button>
</div>
            <!-- select per texture-->
            <!-- <select v-model="selectedTexture" @change="getProductsByTextures">
        <option v-for="(texture, index) in textures" :key="index" :value="texture.id">
          {{ texture.name }}
        </option>
      </select> -->
            


        </div>

        <div class="cards-container overflow-auto">
            <div v-if="products.length == 0">
                prodotti non disponibili
            </div>
            <div class="d-flex justify-content-around gap-5 flex-wrap col-sm-12 " v-else-if="products">
                <CardComponent v-for="(item, index) in products" :key="index" :card="item"></CardComponent>

            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import CardComponent from "../components/CardComponent.vue";
import { extractIdentifiers } from "@vue/compiler-core";

export default {
    name: "Store",

    components: {
        CardComponent,
    },
    data() {
        return {
            store,
            products: [],
            selectedType: null,
            selectedBrand: null,
            selectedTexture: null,
            types: [],
            brands: [],
            textures: [],
        };
    },
    created() {
        this.getTypes();
        this.getBrands();
        //this.getTextures();
    },

    methods: {
        getProduct() {
            let data = {
                params: {
                    typeFilter: this.selectedType,
                    brandFilter: this.selectedBrand,

                }

            }
            axios.get(`${this.store.apiBaseUrl}/products`, data).then((response) => {
                console.log(response.data.results);
                this.products = response.data.results;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.total = response.data.results.total;

            });
        },
        getProductsByType() {
            if (this.selectedType) {
                console.log(
                    `http://127.0.0.1:8000/api/products?typeFilter=${this.selectedType}`
                );
                axios
                    .get(
                        `http://127.0.0.1:8000/api/products?typeFilter=${this.selectedType}`
                    )
                    .then((response) => {
                        // console.log(response);
                        // console.log(response.data.results);
                        this.products = response.data.results;
                    });
            }
        },
        getProductsByBrands() {
            console.log("ciao");
            if (this.selectedBrand) {
                // console.log(
                //  `http://127.0.0.1:8000/api/products?brandFilter=${this.selectedBrand}`
                // );
                axios
                    .get(
                        `http://127.0.0.1:8000/api/products?brandFilter=${this.selectedBrand}`
                    )
                    .then((response) => {
                        console.log(response);
                        console.log(response.data.results);
                        this.products = response.data.results;
                    });
            }
        },
        // getProductsByTextures() {
        //   console.log("ciao");
        //   if (this.selectedTexture) {
        //    // console.log(
        //      // `http://127.0.0.1:8000/api/products?textureFilter=${this.selectedTexture}`
        //    // );
        //     axios
        //       .get(
        //         `http://127.0.0.1:8000/api/products?textureFilter=${this.selectedTexture}`
        //       )
        //       .then((response) => {
        //         //console.log(response);
        //        // console.log(response.data.results);
        //         this.products = response.data.results;
        //       });
        //   }
        // },
        // getProductsByTextures() {
        //   console.log("ciao");
        //   if (this.selectedTexture) {
        //     console.log(
        //       `http://127.0.0.1:8000/api/products?textureFilter=${this.selectedtexture}`
        //     );
        //     axios
        //       .get(
        //         `http://127.0.0.1:8000/api/products?textureFilter=${this.selectedtexture}`
        //       )
        //       .then((response) => {
        //         console.log(response);
        //         console.log(response.data.results);
        //         this.products = response.data.results;
        //       });
        //   }
        // },

        getTypes() {
            let types_ = [];
            let check = false;
            //console.log("ciao")
            axios.get(`http://127.0.0.1:8000/api/products`).then((response) => {
                // console.log("sono in risposta");
                // console.log(response.data.results);
                response.data.results.forEach((type) => {
                    types_.forEach((element) => {
                        if (element.name == type.type.name) {
                            check = true;
                        }
                    });

                    if (!check) {
                        types_.push(type.type);
                    }

                    check = false;
                });
                this.types = types_;
                // console.log(this.types);
            });
        },
        getBrands() {
            let brands_ = [];
            let check = false;
            //console.log("ciao")
            axios.get(`http://127.0.0.1:8000/api/products`).then((response) => {
                // console.log("sono in risposta");
                // console.log(response.data.results);
                response.data.results.forEach((brand) => {
                    brands_.forEach((element) => {
                        if (element.name == brand.brand.name) {
                            check = true;
                        }
                    });

                    if (!check) {
                        brands_.push(brand.brand);
                    }

                    check = false;
                });
                this.brands = brands_;
            });
        },
        getTextures() {
            let textures_ = [];
            let check = false;
            //console.log("ciao")
            axios.get(`http://127.0.0.1:8000/api/products`).then((response) => {
                console.log("sono in risposta");

                console.log(response.data.results);
                response.data.results.forEach((texture) => {
                    // console.log(texture)
                    textures_.forEach((element) => {
                        if (element.name == texture.texture.name) {
                            check = true;
                        }
                    });

                    if (!check) {
                        textures_.push(texture.texture);
                    }

                    check = false;
                });
                this.textures = textures_;
            });
        },

    },

    mounted() {
        this.getProduct();
    },
};
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.cards-container {
    height: 65vh;
}

// bottone filtra
button {
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.5rem 1rem;
    margin: 10px 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 17px;
    border-radius: 500px;
    overflow: hidden;
    background: $red;
    color: ghostwhite;
}

button span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
}

button:hover span {
    color: black;
}

button::before,
button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

button::before {
    content: "";
    background: #000;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

button:hover::before {
    transform: translate3d(100%, 0, 0);
}

select {
    border-radius: 8px;
    height: 30px;
}

select:required:invalid {
    color: rgb(255, 255, 255);
}

option[value=""][disabled] {
    display: none;
}


</style>
