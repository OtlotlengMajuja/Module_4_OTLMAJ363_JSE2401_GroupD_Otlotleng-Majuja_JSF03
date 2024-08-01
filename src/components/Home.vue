<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-4xl font-bold text-primary-dark mb-6">
      Welcome to Emercom
    </h1>
    <p class="text-lg text-primary-medium mb-4">
      Discover our wide range of products and amazing deals!
    </p>
    <router-link
      to="/products"
      class="bg-primary-dark text-primary-light font-semibold py-2 px-4 rounded hover:bg-primary-medium transition-colors duration-300"
    >
      Shop Now
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
