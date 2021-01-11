<template>
  <div id="app" class="grid-layout-wrapper app-fonts">
    <header class="app-header">App Title</header>
    <router-nav class="app-nav"/>
    <div class="page-view">
      <router-view />
    </div>
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
  components: { "router-nav": RouterNav },
};
</script>

<style lang="scss">
.app-fonts {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.grid-layout-wrapper {
  display: grid;
  grid-template-rows: minmax(20px, 0.5fr) minmax(20px, 0.5fr) minmax(200px, 4fr);
  grid-gap: 10px;
  margin: 0;
  padding: 0;
  border: 0;
  width: 100vw;
  height: 100vh;

  background: white;

  .app-header {
    background: lightcoral;
  }

  .app-nav {
    background: lightgreen;
  }

  .page-view {
    background: lightYellow;
  }

  /*
  .notes-view {
    grid-column: span 3;
  }

  .note-view {
    background: lightblue;
    grid-column: span 5;
  }

  .note-form {
    background: lightYellow;
    grid-column: minmax(300px, 1fr);
  }
  */
}

</style>
