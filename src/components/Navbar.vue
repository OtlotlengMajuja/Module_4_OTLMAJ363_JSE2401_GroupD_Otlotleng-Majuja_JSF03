<template>
  <nav class="bg-primary-medium border-primary-dark sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <img src="../assets/logo.png" class="h-8 w-8" alt="Emercom Logo" />
            <span class="ml-2 text-black text-lg font-semibold">Emercom</span>
          </router-link>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              to="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Products</router-link
            >
          </div>
        </div>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-400 hover:text-white">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{ hidden: !isMenuOpen }" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          to="/"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Products</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
/**
 * Navbar component
 *
 * This component represents the navigation bar for the application.
 *
 * @component
 * @property {boolean} isMenuOpen - Indicates whether the mobile menu is open.
 */
export default {
  name: "Navbar",
  data() {
    return {
      /**
       * Indicates whether the mobile menu is open.
       *
       * @type {boolean}
       */
      isMenuOpen: false,
    };
  },
  methods: {
    /**
     * Toggles the mobile menu open/closed state.
     */
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
