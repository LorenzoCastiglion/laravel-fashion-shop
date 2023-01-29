<template>
  <div class="container m-auto">
    <!-- SELECT PER TIPO-->
    <div>
      <!-- @change="getProductsByType"> -->
      <select v-model="selectedType" >
        <option v-for="(type, index) in types" :key="index" :value="type.id">
          {{ type.name }}
        </option>
      </select>

      <!-- SELECT PER BRAND-->
      <!-- @change="getProductsByBrands"> -->
      <select v-model="selectedBrand" >
        <option v-for="(brand, index) in brands" :key="index" :value="brand.id">
          {{ brand.name }}
        </option>
      </select>
     <!-- select per texture-->
     <!-- <select v-model="selectedTexture" @change="getProductsByTextures">
        <option v-for="(texture, index) in textures" :key="index" :value="texture.id">
          {{ texture.name }}
        </option>
      </select> -->
      <button @click="getProduct()">FILTRA</button>


    </div>

    <div class="cards-container overflow-auto">
      <div v-if="products.length == 0">
        prodotti non disponibili
      </div>
      <div class="d-flex justify-content-around gap-5 flex-wrap " v-else-if="products ">
        <CardComponent
          v-for="(item, index) in products"
          :key="index"
          :card="item" 
        ></CardComponent>
        
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
      let data={
        params:{
          typeFilter:this.selectedType,
          brandFilter:this.selectedBrand,
          
        }

      }
      axios.get(`${this.store.apiBaseUrl}/products`,data).then((response) => {
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
.cards-container {
  height: 65vh;
}
</style>
