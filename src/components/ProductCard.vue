<template>
  <div
    class="card bg-primary-light shadow rounded-lg border-primary-dark p-4 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
  >
    <div class="flex justify-center w-full mb-4">
      <img
        :src="product.image"
        alt=""
        class="h-32 w-full object-contain mb-4"
      />
    </div>
    <h2 class="text-lg font-semibold mb-2 text-primary-dark">
      {{ product.title }}
    </h2>
    <p class="text-gray-600 mb-2">${{ product.price }}</p>
    <p class="text-gray-600 mb-2">{{ product.category }}</p>
    <div class="flex items-center">
      <star-rating :rating="product.rating.rate"></star-rating>
      <span class="ml-2 text-sm text-gray-600"
        >{{ product.rating.count }} reviews</span
      >
    </div>
    <router-link
      :to="{ name: 'ProductDetails', params: { id: product.id } }"
      class="mt-4 bg-primary-dark text-primary-light font-semibold py-2 px-4 rounded"
    >
      View Details
    </router-link>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";

export default {
  name: "ProductCard",
  components: {
    StarRating,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
