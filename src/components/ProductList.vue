<template>
  <div class="container mx-auto px-6 py-8">
    <div class="flex justify-between items-center mb-4">
      <div>
        <label
          for="category"
          class="text-xl font-semibold mr-2 text-primary-dark"
          >Category:</label
        >
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
      <div>
        <label for="sort" class="text-xl font-semibold mr-2 text-primary-dark"
          >Sort by price:</label
        >
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
    </div>
    <div>
      <button
        @click="resetFilters"
        class="bg-primary-dark text-primary-light font-semibold py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>

    <div
      v-if="loading"
      class="loading text-center text-2xl text-primary-accent1"
    >
      Loading...
    </div>

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
