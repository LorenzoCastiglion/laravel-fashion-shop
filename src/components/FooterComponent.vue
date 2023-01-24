<template>
   <footer>
   <div class="d-flex">

    <div>
        <img src="../../public/img/txt-logo.png" alt="">
    </div>
    <div class=" d-flex">

        <div class=" text-white" v-for="item in store.footerItems" :key="index">
            <ul>{{ item.label }}
            <li v-for="x in item.storeItem">
                {{ x.pagename }}
            </li>
            
            </ul> 
        </div>

    </div>

   </div>
   </footer>
</template>

<script>
import { store } from '../store';
    export default {
        name:'AppFooter',

        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>