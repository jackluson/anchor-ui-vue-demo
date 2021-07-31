<template>
  <div id="app">
    <h2>Demo演示</h2>
    <demo msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import demo from "./components/demo.vue";

export default {
  name: "App",
  components: {
    demo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
