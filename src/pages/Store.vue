<template>
    <div class="container m-auto">
        <div class=" cards-container overflow-auto">
            <div class="d-flex justify-content-around gap-5  flex-wrap">
                <CardComponent v-for="(item, index) in products" :key="index" :card="item"></CardComponent>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import { store } from '../store';
import CardComponent from '../components/CardComponent.vue';

export default {
    name: 'Store',

    components: {
        CardComponent
    },
    data() {
        return {
            store,
            products: null,

        }
    },

    methods: {
        getProduct() {

            axios.get(`${this.store.apiBaseUrl}/products`).then((response) => {
                console.log(response.data.results) 
                this.products = response.data.results;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.total = response.data.results.total;
            })
        },
    },

    mounted() {

        this.getProduct()
    }


}


</script>

<style lang="scss" scoped>
.cards-container {
    height: 65vh;
}
</style>