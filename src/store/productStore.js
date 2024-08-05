import { ref, computed } from 'vue';

export const useProductStore = () => {
    const products = ref([]);
    const loading = ref(true);
    const selectedCategory = ref("");
    const sortOrder = ref("");
    const categories = ref([]);

    const filteredProducts = computed(() => {
        let tempProducts = products.value;

        if (selectedCategory.value) {
            tempProducts = tempProducts.filter(
                (product) => product.category === selectedCategory.value
            );
        }

        if (sortOrder.value === "asc") {
            tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder.value === "desc") {
            tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        }

        return tempProducts;
    });

    const fetchCategories = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            categories.value = await response.json();
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const fetchProducts = async () => {
        loading.value = true;
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            products.value = await response.json();
            loading.value = false;
        } catch (error) {
            console.error("Error fetching products:", error);
            loading.value = false;
        }
    };

    const setSelectedCategory = (category) => {
        selectedCategory.value = category;
    };

    const setSortOrder = (order) => {
        sortOrder.value = order;
    };

    const resetFilters = () => {
        selectedCategory.value = "";
        sortOrder.value = "";
    };

    return {
        products,
        loading,
        selectedCategory,
        sortOrder,
        categories,
        filteredProducts,
        fetchCategories,
        fetchProducts,
        setSelectedCategory,
        setSortOrder,
        resetFilters,
    };
};