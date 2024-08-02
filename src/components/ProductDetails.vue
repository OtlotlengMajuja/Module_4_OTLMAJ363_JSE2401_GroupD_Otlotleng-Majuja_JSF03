<template>
  <div v-if="loading" class="container mx-auto px-6 py-8 text-center">
    Loading...
  </div>
  <div v-else-if="error" class="container mx-auto px-6 py-8 text-center">
    Error: {{ error }}
  </div>
  <div v-else class="container mx-auto px-6 py-8">
    <div class="bg-white rounded-lg p-6">
      <h2 class="text-2xl font-semibold text-primary-dark mb-4">
        {{ product.title }}
      </h2>
      <img
        :src="product.image"
        :alt="product.title"
        class="h-64 object-contain mb-4"
      />
      <p class="mb-4">{{ product.description }}</p>
      <p class="mb-4">Category: {{ product.category }}</p>
      <p class="mb-4">Price: ${{ product.price }}</p>
      <div class="flex items-center mb-4">
        <star-rating :rating="product.rating.rate"></star-rating>
        <span class="ml-2">{{ product.rating.count }} reviews</span>
      </div>
      <router-link
        to="/products"
        class="bg-primary-dark text-primary-light font-semibold py-2 px-4 rounded"
      >
        Back to Products
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import StarRating from "./StarRating.vue";

export default {
  name: "ProductDetails",
  components: {
    StarRating,
  },
  setup() {
    const route = useRoute();
    const product = ref({});
    const loading = ref(true);
    const error = ref(null);

    const fetchProduct = async (id) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        product.value = await response.json();
      } catch (err) {
        console.error("Error fetching product:", err);
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchProduct(route.params.id);
    });

    return {
      product,
      loading,
      error,
    };
  },
};
</script>
