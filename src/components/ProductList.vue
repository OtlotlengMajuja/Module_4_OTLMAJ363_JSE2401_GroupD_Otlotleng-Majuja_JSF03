<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8 bg-white rounded-lg shadow p-6">
      <h1 class="text-2xl font-bold mb-4">Our Products</h1>
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
          class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset Filters
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
// ... (keep the script section as it was in the previous version)
</script>
