<template>
  <nav class="bg-primary-medium border-primary-dark sticky top-0 z-50">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="../assets/logo.png" class="h-8" alt="Emercom Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-primary-light"
          >Emercom</span
        >
      </router-link>
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div
        :class="{ hidden: !isMenuOpen }"
        class="w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 text-white rounded hover:bg-primary-accent1 md:hover:bg-transparent md:border-0 md:hover:text-primary-accent2 md:p-0"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/products"
              class="block py-2 px-3 text-white rounded hover:bg-primary-accent1 md:hover:bg-transparent md:border-0 md:hover:text-primary-accent2 md:p-0"
              >Products</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="block py-2 px-3 text-white rounded hover:bg-primary-accent1 md:hover:bg-transparent md:border-0 md:hover:text-primary-accent2 md:p-0"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              class="block py-2 px-3 text-white rounded hover:bg-primary-accent1 md:hover:bg-transparent md:border-0 md:hover:text-primary-accent2 md:p-0"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
