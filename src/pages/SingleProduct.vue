<template>
    <section v-if="product">
        <div class="d-flex">
            <div class="img-container col-4">
                <img src="" alt="">
            </div>
            <div class="col-8">
                <h2>{{ product.name }}</h2>
            </div>

        </div>
    </section>
    <section v-else>

    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
    export default {
        name: 'SingleProduct',

        data(){
            return{
                store,
                product:null
            }
        },

        methods:{
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
 },
 mounted(){
    this.getProduct()
 }
    }
</script>

<style lang="scss" scoped>

</style>