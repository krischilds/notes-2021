<template>
  <v-app
    id="main"
  >
    <div id="app" class="grid-layout-wrapper">
      <header class="app-header">{{themeName}}</header>
      <div style="display:flex;width:100%;">
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
import themesMixin from "./mixins/themesMixin";

export default {
  name: "App",
  mixins: [themesMixin],
  components: { "router-nav": RouterNav, },
  mounted() {
    this.$store.dispatch('getNotes');
  }
  
};
</script>

<style lang="scss">

  :root {
    --bc-primary: #FF4081;
    --bc-accent: #AF4081;
    --bc-secondary: #0049A1;
    --bc-success: #4C8F50;
    --bc-info: #2196F3;
    --bc-warning: #AB8C00;
    --bc-error: #AF5252;
    --bc-background: #FFFFFF;
    --bc-text: black;
  }

  .box {
    width: 200px;
    height: 200px;
    border: 2px solid var(--bc-accent);
  }

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

 .test-vuetify {
  color: var(--v-primary-base);
  background-color: var(--v-primary-lighten3);
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

}
</style>
