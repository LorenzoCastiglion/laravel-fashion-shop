<template>
<!-- MENU BOOTSTRAP -->
        <!--<header class="">
        <nav class="container navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">
                <img  src="../../public/img/txt-logo.png" alt="">
                <button id="burger" class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-2 mb-lg-0">
                        <li id="nav-txt" class="nav-item text-white hover-underline-animation" v-for="(item, index) in store.menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" active-class="active" class="nav-link text-white nav-link">
                                {{ item.label }}<span class=" dot">.</span>

                            </router-link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </header>-->

    <!-- FINE MENU BOOTSTRAP -->

    <header>
        <nav class="container navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img  src="../../public/img/txt-logo.png" alt="">

                <div id="NavDesktop" class="collapse navbar-collapse justify-content-end" >
                    <ul class="navbar-nav  mb-2 mb-lg-0 ">
                        <li id="nav-txt" class="nav-item text-white hover-underline-animation" v-for="(item, index) in store.menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" active-class="active" class="nav-link text-white nav-link">
                                {{ item.label }}<span class=" dot">.</span>

                            </router-link>
                        </li>

                    </ul>

                </div>

<!-- Toggle Menu--> 
    <div id="NavMobile">
    <button @click="isMenuOpen = !isMenuOpen"><i class="fa-regular fa-bars"></i></button>
    <div v-if="isMenuOpen" class="d-flex justidy-content-start">
        <ul class="navbar-nav  mb-2 mb-lg-0 ">
                        <li id="nav-txt" class="nav-item text-white hover-underline-animation" v-for="(item, index) in store.menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" active-class="active" class="nav-link text-white nav-link">
                                {{ item.label }}<span class=" dot">.</span>

                            </router-link>
                        </li>
        </ul>
    </div>
  </div>
<!-- Fine Toggle Menu-->

  </div>
  </nav>
</header>

    
</template>

<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            isMenuOpen: false,
        }
    }

}
</script>



<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;


.dot{
    color: $red;
    font-size: 30px;
    
}


#nav-txt{
    font-family: 'Montserrat', sans-serif;
    font-weight:700;
    font-size: 20px;
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

header{
    -webkit-box-shadow: 0 1.5px 6px -1px $red;
  -moz-box-shadow: 0 1.5px 6px -1px $red;
  box-shadow: 0 1.5px 6px -1px $red;
    margin-bottom: 50px;
}

button{
    background-color: $red;
    border-radius: 5px;
    padding: 5px 20px;
    color: white;
    border: $red;
}



//CSS Toogle Menu
@media only screen and (min-width: 480px) {
#NavDesktop{
    display: none;
}
}

@media only screen and (min-width: 992px) {
#NavMobile{
    display: none;
}
}

</style>