import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import Store from './pages/Store.vue';
import About from './pages/About.vue';
import ContactUs from './pages/ContactUs.vue';
import SingleProduct from './pages/SingleProduct.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/store',
            name: 'store',
            component: Store
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactUs
        },
        {
            path: '/store/:slug',
            name: 'singleproduct',
            component: SingleProduct
        },

       
    ]
});

export { router };