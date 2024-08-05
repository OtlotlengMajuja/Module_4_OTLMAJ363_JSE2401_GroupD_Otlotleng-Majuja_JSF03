<template>
  <div class="bg-white shadow rounded-lg overflow-hidden">
    <img
      :src="product.image"
      :alt="product.title"
      class="h-48 w-full object-contain p-4"
    />
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-2 truncate">{{ product.title }}</h2>
      <p class="text-gray-600 mb-2">${{ product.price.toFixed(2) }}</p>
      <p class="text-sm text-gray-500 mb-2">{{ product.category }}</p>
      <router-link
        :to="{ name: 'ProductDetails', params: { id: product.id } }"
        class="bg-black text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
