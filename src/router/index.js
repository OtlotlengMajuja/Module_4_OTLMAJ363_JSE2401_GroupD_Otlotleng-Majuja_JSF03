import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/ProductDetails.vue';

/**
 * Array of route objects.
 * Each route object defines a route for the application.
 * 
 * @type {Array<Object>}
 * @property {string} path - The URL path for the route.
 * @property {string} [name] - The name of the route.
 * @property {Object} component - The component to be rendered for the route.
 */
const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    /**
     * Route for the product list page.
     * 
     * @type {Object}
     * @property {string} path - The URL path for the route.
     * @property {string} name - The name of the route.
     * @property {Object} component - The component to be rendered for the route.
     */
    {
        path: '/products',
        name: 'ProductList',
        component: ProductList
    },
    /**
     * Route for the product details page.
     * 
     * @type {Object}
     * @property {string} path - The URL path for the route.
     * @property {string} name - The name of the route.
     * @property {Object} component - The component to be rendered for the route.
     */
    {
        path: '/product/:id',
        name: 'ProductDetails',
        component: ProductDetails
    }
];

/**
 * Creates a router instance.
 * 
 * @function
 * @returns {Object} - Vue Router instance.
 */
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
