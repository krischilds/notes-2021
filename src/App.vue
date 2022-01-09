<template>
  <v-app id="main">
    <div id="app" class="grid-layout-wrapper">
      <header class="app-header">
        <div class="bc-accent--text">Themes App</div>
      </header>
      <div style="display: flex; width: 100%">
        <div class="box bc-primary bc-text">BC TEST 1</div>
        <div class="box bc-success bc-text">BC TEST 2</div>
        <div class="box bc-background bc-primary--text">BC TEST 3</div>
        <div class="box test-vuetify">VETIFY TEST</div>
      </div>
      <router-nav class="app-nav" />
      <div class="page-view">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script>
import RouterNav from "./components/Nav/RouterNav.vue";
import themesRootMixin from "./mixins/themesRootMixin";

export default {
  name: "App",
  mixins: [themesRootMixin],
  components: { "router-nav": RouterNav },
  data() {
    return {
      clickCount: 0,
    };
  },
  mounted() {
    this.$store.dispatch("getNotes");
  },
};
</script>

<style lang="scss">
:root {
  --bc-primary: #0c60ce;
  --bc-accent: #d8db00;
  --bc-secondary: #535d69;
  --bc-success: #4c8f50;
  --bc-info: #2196f3;
  --bc-warning: #d8b105;
  --bc-error: #af5252;
  --bc-background: #ffffff;
  --bc-text: black;
}

.box {
  width: 200px;
  height: 200px;
  border: 2px solid var(--bc-accent);
}

.grid-layout-wrapper {
  display: grid;
  //grid-template-rows: minmax(20px, 0.5fr) minmax(20px, 0.5fr) minmax(200px, 4fr);
  grid-template-rows: 60px minmax(214px, 0.5fr) 60px 500px;
  grid-gap: 10px;
  margin: 0;
  padding: 0;
  border: 0;
  width: 100vw;
  height: 100vh;

  // background: white;

  .app-header {
    // background: lightcoral;
    border: 2px solid var(--bc-primary);
  }

  .app-nav {
    // background: lightgreen;
    // border: 2px solid lightgreen;
    border: 2px solid var(--bc-info);
  }

  .page-view {
    border: 2px solid var(--bc-secondary);
  }

  // Theme colors

  .bc-background {
    background-color: var(--bc-background);
  }

  .bc-text {
    color: var(--bc-text);
  }

  .bc-primary {
    background-color: var(--bc-primary);
  }

  .bc-primary--text {
    color: var(--bc-primary);
  }

  .bc-success {
    background-color: var(--bc-success);
  }

  .bc-success--text {
    color: var(--bc-success);
  }

  .bc-error {
    background-color: var(--bc-error);
  }

  .bc-error--text {
    color: var(--bc-error);
  }

  .bc-accent {
    background-color: var(--bc-accent);
  }

  .bc-accent--text {
    color: var(--bc-accent);
  }
}
</style>
