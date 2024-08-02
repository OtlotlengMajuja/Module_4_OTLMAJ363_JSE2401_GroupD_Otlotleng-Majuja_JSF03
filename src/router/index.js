import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/ProductDetails.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/product/:id',
        name: 'ProductDetails',
        component: ProductDetails
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;