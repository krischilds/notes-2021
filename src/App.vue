<template>
  <v-app>
    <div id="app" class="grid-layout-wrapper" :style="getStyle">
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
import themesMixin from "./mixins/themesMixin";

export default {
  name: "App",
  mixins: [themesMixin],
  components: { "router-nav": RouterNav },
  /*
  computed: {
    theme: function () {
      return this.$store.getters.getTheme;
    },
    getStyle: function () {
      // this.$props["backgroundColor"]
      // this.$props["color"]

      const theme = this.$store.getters.getTheme;
      // TODO: make this return this.theme

      return {
        backgroundColor: theme.backgroundColor,
        color: theme.color
      };
    },
    // TODO: Add helpers on top of vuex
  },
  */
  mounted() {
    //const themes = this.$store.getters.getThemes;
    //const theme = this.$store.getters.getTheme;


    console.log("App.vue:mounted");
    console.log("App.vue:mounted:theme");    
    console.log(this.theme);


    // TODO: set default theme if none selected
    // themeSelected
  },
};
</script>

<style lang="scss">

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
