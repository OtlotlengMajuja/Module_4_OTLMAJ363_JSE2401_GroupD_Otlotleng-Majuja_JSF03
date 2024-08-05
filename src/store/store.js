import { createStore } from 'vuex';

export default createStore({
    state: {
        products: [],
        loading: true,
        selectedCategory: "",
        sortOrder: "",
        categories: [],
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setLoading(state, loading) {
            state.loading = loading;
        },
        setSelectedCategory(state, category) {
            state.selectedCategory = category;
        },
        setSortOrder(state, order) {
            state.sortOrder = order;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        resetFilters(state) {
            state.selectedCategory = "";
            state.sortOrder = "";
        },
    },
    actions: {
        async fetchCategories({ commit }) {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                const categories = await response.json();
                commit('setCategories', categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        },
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