<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8 bg-white rounded-lg shadow p-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center">
          <label for="category" class="mr-2">Category:</label>
          <select
            v-model="selectedCategory"
            @change="filterProducts"
            class="border rounded p-2"
          >
            <option value="">All</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
        <div class="flex items-center">
          <label for="sort" class="mr-2">Sort by price:</label>
          <select
            v-model="sortOrder"
            @change="filterProducts"
            class="border rounded p-2"
          >
            <option value="">Default</option>
            <option value="asc">Lowest to Highest</option>
            <option value="desc">Highest to Lowest</option>
          </select>
        </div>
        <button
          @click="resetFilters"
          class="bg-black text-white px-4 py-2 rounded font-semibold"
        >
          Reset
        </button>
      </div>
    </div>

    <div v-if="loading" class="text-center text-xl">Loading...</div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <product-card
        v-for="product in filteredProductsList"
        :key="product.id"
        :product="product"
      ></product-card>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  setup() {
    const products = ref([]);
    const loading = ref(true);
    const selectedCategory = ref("");
    const sortOrder = ref("");
    const filteredProductsList = ref([]);
    const categories = ref([]);

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
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
        filteredProductsList.value = products.value;
        loading.value = false;
      } catch (error) {
        console.error("Error fetching products:", error);
        loading.value = false;
      }
    };

    const filterProducts = () => {
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

      filteredProductsList.value = tempProducts;
    };

    const resetFilters = () => {
      selectedCategory.value = "";
      sortOrder.value = "";
      filteredProductsList.value = products.value;
    };

    onMounted(async () => {
      await fetchCategories();
      await fetchProducts();
    });

    return {
      loading,
      selectedCategory,
      sortOrder,
      filteredProductsList,
      categories,
      filterProducts,
      resetFilters,
    };
  },
};
</script>
