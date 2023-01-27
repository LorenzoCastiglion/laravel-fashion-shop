<template>
    <footer>
    <div class="container">
     <div class="d-flex justify-content-between">
        <div>
         <img src="../../public/img/txt-logo.png" alt="">
           <!-- Copyright -->
  <div class="mt-5 text-white" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2023 <span class="text-reset fw-bold">Boolness</span>
  </div>
  <!-- Copyright -->
        </div>
         <div class="text-white d-flex" v-for="item in store.footerItems" :key="index">
             <ul class="title">{{ item.label }}<span class=" dot">.</span>
             <li v-for="x in item.storeItem" class="hover-underline-animation">
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
 @use './../assets/styles/partials/variables' as *;

.dot{
    color:$red;
    font-size: 30px;
    
}




 ul{
    font-size: 22px;
    font-weight: 500;
    li{
        font-size: 18px;
        font-weight: 300;
        list-style: none;
        color: grey;
    }
    :hover{
        color: white;
    }


 }

 .hover-underline-animation {
    
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
    background-color:$red;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
    
 </style>