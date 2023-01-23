<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">
                <img  src="../../public/img/txt-logo.png" alt="">
                <button id="burger" class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li id="nav-txt" class="nav-item text-white hover-underline-animation" v-for="(item, index) in store.menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" active-class="active" class="nav-link text-white">
                                {{ item.label }}.

                            </router-link>
                        </li>

                    </ul>

                </div>
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
            store

        }
    }

}
</script>

<style lang="scss" scoped>


#burger{
    color: white;
    background-color: white;
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
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}


</style>