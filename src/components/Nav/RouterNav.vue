<template>
    <ul style="margin: 0 !important;">
      <li v-for="(r, i) in routes" :key="`route${i}`" class="nav-item">
        <span style="padding-right:10px" v-if="i > 0">|</span>
        <router-link :to="r.path">{{ r.name }}</router-link>
      </li>
    </ul>
</template>

<script>
import { routes } from "../../router";

export default {
  name: "RouterNav",
  props: {},
  data() {
    return {
      routes: null
    };
  },
  mounted() {
    this.routes = routes;
    console.log(this.routes);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-flex;
  margin: 0 6px;
}
a {
  color: #42b983;
}

.nav-item {
  padding: 6px;
}
</style>
