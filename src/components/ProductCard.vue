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
        class="bg-black text-white px-4 py-2 rounded hover:bg-black"
      >
        View Details
      </router-link>
    </div>
  </div>
</template>

<script>
/**
 * ProductCard component
 *
 * This component represents a card that displays product details.
 *
 * @component
 * @prop {Object} product - The product object containing details to be displayed.
 * @prop {string} product.image - The URL of the product image.
 * @prop {string} product.title - The title of the product.
 * @prop {number} product.price - The price of the product.
 * @prop {string} product.category - The category of the product.
 * @prop {Object} product.rating - The rating object of the product.
 * @prop {number} product.rating.rate - The average rating of the product.
 * @prop {number} product.rating.count - The number of ratings the product has received.
 */
export default {
  name: "ProductCard",
  props: {
    /**
     * The product object containing details to be displayed.
     *
     * @type {Object}
     * @required
     */
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
