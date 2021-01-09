<template>
  <div id="app">
    <nav class="nav-bar">
      <router-nav />
    </nav>

    <router-view />
  </div>
</template>

<script>
import RouterNav from "./components/Nav/RouterNav.vue";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/main.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

export default {
  name: "App",
  components: { "router-nav": RouterNav }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-bar {
  background: #bed4ca;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-bar a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-bar a.router-link-exact-active {
  color: #42b983;
}

</style>
