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
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      ></product-card>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import ProductCard from "./ProductCard.vue";

/**
 * ProductList component
 *
 * This component is responsible for displaying a list of products with filtering and sorting options.
 *
 * @component
 */
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  setup() {
    const store = useStore();

    /**
     * Indicates whether the data is loading.
     *
     * @type {import('vue').ComputedRef<boolean>}
     */
    const loading = computed(() => store.state.loading);

    /**
     * The selected category for filtering products.
     *
     * @type {import('vue').WritableComputedRef<string>}
     */
    const selectedCategory = computed({
      get: () => store.state.selectedCategory,
      set: (value) => store.commit("setSelectedCategory", value),
    });

    /**
     * The sort order for sorting products by price.
     *
     * @type {import('vue').WritableComputedRef<string>}
     */
    const sortOrder = computed({
      get: () => store.state.sortOrder,
      set: (value) => store.commit("setSortOrder", value),
    });

    /**
     * The list of available categories.
     *
     * @type {import('vue').ComputedRef<string[]>}
     */
    const categories = computed(() => store.state.categories);

    /**
     * The list of filtered products based on selected category and sort order.
     *
     * @type {import('vue').ComputedRef<object[]>}
     */
    const filteredProducts = computed(() => store.getters.filteredProducts);

    /**
     * Filters the products based on the selected category and sort order.
     */
    const filterProducts = () => {
      store.commit("setSelectedCategory", selectedCategory.value);
      store.commit("setSortOrder", sortOrder.value);
    };

    /**
     * Resets the filters to their default values.
     */
    const resetFilters = () => {
      store.commit("resetFilters");
    };

    /**
     * Fetches the categories and products when the component is mounted.
     */
    onMounted(async () => {
      await store.dispatch("fetchCategories");
      await store.dispatch("fetchProducts");
    });

    return {
      loading,
      selectedCategory,
      sortOrder,
      categories,
      filteredProducts,
      filterProducts,
      resetFilters,
    };
  },
};
</script>
