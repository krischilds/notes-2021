<template>
  <div>
    <tree-menu
      v-if="tree"
      :node="tree.node"
      :nodes="tree.nodes"
      :depth="0"
    ></tree-menu>
    <div v-else>Loading Tree</div>
  </div>
</template>

<script>
import TreeMenu from "./TreeMenu.vue";

export default {
  components: { "tree-menu": TreeMenu },
  name: "tree-menu-root",
  props: {
    tree: {
      type: Object,
    },
  },
};
</script>

<style></style>
