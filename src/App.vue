<template>
  <v-app
    id="main"
  >
    <div id="app" class="grid-layout-wrapper">
      <header class="app-header">TEST</header>
      <router-nav class="app-nav" />
      <div class="page-view">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script>
import RouterNav from "./components/Nav/RouterNav.vue";
//import NoteView from "./components/Notes/NoteView.vue";
//"note-view": NoteView
import themesMixin from "./mixins/themesMixin";


export default {
  name: "App",
  mixins: [themesMixin],
  components: { "router-nav": RouterNav, },
  mounted() {
    this.$store.dispatch('getNotes');
  }
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

  // background: white;

  .app-header {
    // background: lightcoral;
    border: 2px solid black;
  }

  .app-nav {
    // background: lightgreen;
    // border: 2px solid lightgreen;
    border: 2px solid black;
  }

  .page-view {
    //background: lightYellow;
    // border: 2px solid lightskyblue;
    border: 2px solid black;
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
