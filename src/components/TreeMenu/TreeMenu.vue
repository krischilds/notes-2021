<template>
  <div class="tree-menu">
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent" :class="labelClasses">
        <i
          v-if="nodes"
          class="fa"
          :class="iconClasses"
          style="padding-right:10px"
        ></i>
        <span v-if="nodes">{{ node.value }} {{ node.type }}</span>
        <div v-else>
          <span v-if="node.type === 'label'">
            <a href="#">{{ node.value }}</a> {{ node.type }}
          </span>
          <span v-if="node.type === 'dropdown'">
            <span style="color:red">{{ node.value }}</span>
            <select>
              <option v-for="x in node.options" :value="x" :key="x">{{
                x
              }}</option>
            </select>
          </span>
        </div>
      </div>
    </div>
    <div v-if="showChildren">
      <tree-menu
        :key="node"
        v-for="node in nodes"
        :nodes="node.nodes"
        :node="node.node"
        :depth="depth + 1"
      >
      </tree-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: ["node", "nodes", "depth", "special"],
  name: "tree-menu",
  data() {
    return { showChildren: false };
  },
  computed: {
    indent() {
      return { transform: `translate(${this.depth * 30}px)` };
    },
    iconClasses() {
      return {
        "fa-plus-square-o": !this.showChildren,
        "fa-minus-square-o": this.showChildren
      };
    },
    labelClasses() {
      return { "has-children": this.nodes };
    }
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
};
</script>
<style lang="scss">
.tree-menu {
  text-align: left;
  margin: 10px;

  .label-wrapper {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 0px solid rgb(80, 169, 221);
    font-weight: normal;
    .has-children {
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>
