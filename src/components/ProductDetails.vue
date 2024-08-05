<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="text-center text-xl">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500 text-xl">
      Error: {{ error }}
    </div>
    <div v-else class="bg-white rounded-lg shadow overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            :src="product.image"
            :alt="product.title"
            class="h-48 w-full object-contain md:h-full md:w-48 p-4"
          />
        </div>
        <div class="p-8">
          <h2 class="text-2xl font-bold mb-4">
            {{ product.title }}
          </h2>
          <p class="text-gray-600 mb-4">{{ product.description }}</p>
          <p class="text-xl font-semibold mb-4">
            ${{ product.price.toFixed(2) }}
          </p>
          <p class="mb-4">
            <span class="font-semibold">Category:</span> {{ product.category }}
          </p>
          <div class="flex items-center mb-4">
            <star-rating :rating="product.rating.rate"></star-rating>
            <span class="ml-2"
              >{{ product.rating.rate }} ({{
                product.rating.count
              }}
              reviews)</span
            >
          </div>
          <router-link
            to="/"
            class="bg-black text-white px-4 py-2 rounded hover:bg-black"
          >
            Back to Products
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import StarRating from "./StarRating.vue";

/**
 * ProductDetails component
 *
 * This component fetches and displays the details of a single product.
 *
 * @component
 */
export default {
  name: "ProductDetails",
  components: {
    StarRating,
  },
  setup() {
    const route = useRoute();

    /**
     * The product details.
     *
     * @type {import('vue').Ref<object>}
     */
    const product = ref({});

    /**
     * Indicates whether the product data is loading.
     *
     * @type {import('vue').Ref<boolean>}
     */
    const loading = ref(true);

    /**
     * Stores any error that occurs during the fetch operation.
     *
     * @type {import('vue').Ref<string | null>}
     */
    const error = ref(null);

    /**
     * Fetches the product details based on the given ID.
     *
     * @async
     * @function fetchProduct
     * @param {number} id - The ID of the product to fetch.
     */
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

    /**
     * Fetch the product when the component is mounted.
     *
     * @see https://vuejs.org/api/composition-api-lifecycle.html#onmounted
     */
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
