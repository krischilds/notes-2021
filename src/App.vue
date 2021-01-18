<template>
  <v-app>
    <div id="app" class="grid-layout-wrapper app-fonts app-name-vetdrugs">
      <header class="app-header">App Title</header>
      <router-nav class="app-nav" />
      <div class="page-view">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script>
import RouterNav from "./components/Nav/RouterNav.vue";
import Vue from "vue";

export default {
  name: "App",
  components: { "router-nav": RouterNav },
  data() {
    return {
      theme1: {
        type: Object,
        default() {
          return {
            "backgroundColor": "blue",
            "color": "white",
          };
        },
      },
      theme2: {
        type: Object,
        default() {
          return {
            "backgroundColor": "red",
            "color": "white",
          };
        },
      },

    };
  },
computed: {
    theme: function () {
      return this.theme1;
    },
  },
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
    // background: lightcoral;
    border: 2px solid lightcoral;
  }

  .app-nav {
    // background: lightgreen;
    border: 2px solid lightgreen;
  }

  .page-view {
    //background: lightYellow;
    border: 2px solid lightskyblue;
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
