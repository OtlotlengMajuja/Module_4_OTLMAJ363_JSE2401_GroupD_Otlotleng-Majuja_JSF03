<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

/**
 * The root component of the application.
 *
 * This component serves as the main entry point for the application, rendering
 * the navigation bar and the router view where different pages will be displayed.
 *
 * @component
 */
export default {
  name: "App",
  components: {
    /**
     * Navbar component
     */
    Navbar,
  },
};
</script>

<style>
:root {
  --primary-dark: #121425;
  --primary-medium: #4f2c2c;
  --primary-light: #fcfcfc;
  --primary-accent1: #8c4433;
  --primary-accent2: #c95c3b;
}

body {
  font-family: BDSans-Regular, sans-serif !important;
  background-color: var(--primary-light);
  min-height: 100vh;
}
* {
  --tw-ring-color: rgba(59, 130, 246, 0.5);
}
</style>
