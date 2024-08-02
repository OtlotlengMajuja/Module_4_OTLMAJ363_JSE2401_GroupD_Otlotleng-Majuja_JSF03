<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  font-family: BDSans-Regular, sans-serif !important;
  background-color: var(--primary-light);
  min-height: 100vh;
}
* {
  --tw-ring-color: rgba(59, 130, 246, 0.5);
}
</style>
