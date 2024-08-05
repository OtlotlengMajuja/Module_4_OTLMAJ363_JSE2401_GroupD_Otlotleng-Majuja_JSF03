<template>
  <header class="sticky z-50 top-0">
    <nav class="bg-primary-medium border-primary-dark">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <router-link
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="../assets/logo.png" class="h-8" alt="Flowbite Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-primary-light"
            >Emercom</span
          >
        </router-link>
        <button @click="toggleMenu" class="md:hidden">
          <!-- Menu icon -->
        </button>
        <div
          :class="{ hidden: !isMenuOpen }"
          class="w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
          >
            <li>
              <router-link
                to="/"
                class="block py-2 px-3 text-primary-dark rounded hover:bg-primary-accent1 md:hover:bg-transparent md:border-0 md:hover:text-primary-accent2 md:p-0"
                >Home</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
/**
 * Header component
 *
 * This component represents the header of the application, containing the navigation bar.
 *
 * @component
 */
export default {
  name: "Header",
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
