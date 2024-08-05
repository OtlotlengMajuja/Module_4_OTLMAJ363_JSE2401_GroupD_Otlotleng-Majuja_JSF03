import { createStore } from 'vuex';

export default createStore({
    state: {
        /**
         * List of products.
         * @type {Array<Object>}
         */
        products: [],

        /**
         * Loading state.
         * @type {boolean}
         */
        loading: true,

        /**
         * Selected category for filtering.
         * @type {string}
         */
        selectedCategory: "",

        /**
         * Sort order for products.
         * @type {string}
         */
        sortOrder: "",

        /**
         * List of product categories.
         * @type {Array<string>}
         */
        categories: [],
    },
    mutations: {
        /**
         * Sets the list of products.
         * @param {Object} state - Vuex state.
         * @param {Array<Object>} products - List of products.
         */
        setProducts(state, products) {
            state.products = products;
        },

        /**
         * Sets the loading state.
         * @param {Object} state - Vuex state.
         * @param {boolean} loading - Loading state.
         */
        setLoading(state, loading) {
            state.loading = loading;
        },

        /**
         * Sets the selected category for filtering.
         * @param {Object} state - Vuex state.
         * @param {string} category - Selected category.
         */
        setSelectedCategory(state, category) {
            state.selectedCategory = category;
        },

        /**
         * Sets the sort order for products.
         * @param {Object} state - Vuex state.
         * @param {string} order - Sort order.
         */
        setSortOrder(state, order) {
            state.sortOrder = order;
        },

        /**
         * Sets the list of categories.
         * @param {Object} state - Vuex state.
         * @param {Array<string>} categories - List of categories.
         */
        setCategories(state, categories) {
            state.categories = categories;
        },

        /**
         * Resets the selected category and sort order filters.
         * @param {Object} state - Vuex state.
         */
        resetFilters(state) {
            state.selectedCategory = "";
            state.sortOrder = "";
        },
    },
    actions: {
        /**
         * Fetches product categories from the API and commits them to the state.
         * @param {Object} context - Vuex action context.
         */
        async fetchCategories({ commit }) {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                const categories = await response.json();
                commit('setCategories', categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        },

        /**
         * Fetches products from the API and commits them to the state.
         * @param {Object} context - Vuex action context.
         */
        async fetchProducts({ commit }) {
            commit('setLoading', true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const products = await response.json();
                commit('setProducts', products);
                commit('setLoading', false);
            } catch (error) {
                console.error("Error fetching products:", error);
                commit('setLoading', false);
            }
        },
    },
    getters: {
        /**
         * Filters and sorts products based on selected category and sort order.
         * @param {Object} state - Vuex state.
         * @returns {Array<Object>} Filtered and sorted products.
         */
        filteredProducts(state) {
            let tempProducts = state.products;

            if (state.selectedCategory) {
                tempProducts = tempProducts.filter(
                    (product) => product.category === state.selectedCategory
                );
            }

            if (state.sortOrder === "asc") {
                tempProducts = tempProducts.sort((a, b) => a.price - b.price);
            } else if (state.sortOrder === "desc") {
                tempProducts = tempProducts.sort((a, b) => b.price - a.price);
            }

            return tempProducts;
        },
    },
});
