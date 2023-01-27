<template>
  <div class="container m-auto">
    <!-- SELECT PER TIPO-->
    <div>
      <select v-model="selectedType" @change="getProductsByType">
        <option v-for="(type, index) in types" :key="index" :value="type.id">
          {{ type.name }}
        </option>
      </select>
    </div>

    <div class="cards-container overflow-auto">
      <div class="d-flex justify-content-around gap-5 flex-wrap">
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
      products: null,
      selectedType: null,
      types: [],
    };
  },
  created(){
    this.getTypes();
  },

  methods: {
    getProduct() {
      axios.get(`${this.store.apiBaseUrl}/products`).then((response) => {
        console.log(response.data.results);
        this.products = response.data.results;
        this.currentPage = response.data.results.current_page;
        this.lastPage = response.data.results.last_page;
        this.total = response.data.results.total;
      });
    },
    getProductsByType() {
      if (this.selectedType) {
        console.log(`http://127.0.0.1:8000/api/products?typeFilter=${this.selectedType}`);
        axios
          .get(
            `http://127.0.0.1:8000/api/products?typeFilter=${this.selectedType}`
          )
          .then((response) => {
            console.log(response);
            console.log(response.data.results);
            this.products = response.data.results;
          });
      }
    },
    getTypes() {
        let types_ = [];
        let check = false;
        //console.log("ciao")
            axios.get(`http://127.0.0.1:8000/api/products?typeFilter=`)
                .then(response => {
                    console.log("sono in risposta")
                    console.log(response.data.results);
                    response.data.results.forEach(type => {
                        types_.forEach(element => {
                            if(element.name == type.type.name){
                                check = true;
                            }
                        });

                        if(!check){
                        types_.push(type.type);
                        }

                        check = false;
                    });
                    this.types = types_;
                    console.log(this.types);
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
