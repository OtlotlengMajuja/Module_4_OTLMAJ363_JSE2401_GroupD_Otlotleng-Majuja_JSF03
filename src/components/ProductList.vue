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
import { computed } from "vue";
import { useStore } from "vuex";
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  setup() {
    const store = useStore();

    const products = computed(() => store.state.products);
    const loading = computed(() => store.state.loading);
    const selectedCategory = computed({
      get: () => store.state.selectedCategory,
      set: (value) => store.commit("setSelectedCategory", value),
    });
    const sortOrder = computed({
      get: () => store.state.sortOrder,
      set: (value) => store.commit("setSortOrder", value),
    });
    const filteredProductsList = computed(() => store.getters.filteredProducts);
    const categories = computed(() => store.state.categories);

    const fetchCategories = () => store.dispatch("fetchCategories");
    const fetchProducts = () => store.dispatch("fetchProducts");

    const filterProducts = () => {
      store.commit("setSelectedCategory", selectedCategory.value);
      store.commit("setSortOrder", sortOrder.value);
    };

    const resetFilters = () => {
      store.commit("resetFilters");
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
