<template>
  <div>
    <h5>Tree Menu</h5>

    <div id="app">
      <div class="tree-menu-container">
        <select v-model="selected" @change="selectTree">
          <option
            :key="option.value"
            v-for="option in options"
            v-bind:value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
        <tree-menu-root v-if="tree" :tree="tree" />
      </div>
    </div>
  </div>
</template>

<script>
import TreeMenuRoot from "../components/TreeMenu/TreeMenuRoot.vue";

export default {
  components: { "tree-menu-root": TreeMenuRoot },
  methods: {
    selectTree() {
      console.log("selectTree");
    },
  },
  data() {
    return {
      tree: {},
      treeMap: {},
      selected: "A",
      options: [
        { text: "Pesticides", value: "A" },
        { text: "Vet Drugs", value: "B" },
        { text: "Resource Center", value: "C" },
      ],
    };
  },
  watch: {
    selected: function (val) {
      this.tree = this.treeMap[val];
    },
  },
  created() {
    const t1 = {
      node: { type: "label", value: "Pesticides" },
      nodes: [
        {
          node: { type: "label", value: "Label 1" },
        },
        {
          node: { type: "label", value: "Label 2 PARENT" },
          nodes: [
            {
              node: { type: "label", value: "Label 1.2" },
            },
            {
              node: { type: "label", value: "Label 1.2" },
            },
            {
              node: {
                type: "dropdown",
                value: "Label Leaf Speacial",
                options: ["A1", "B2", "C3"],
              },
            },
            {
              node: {
                type: "dropdown",
                value: "Label B",
                options: ["A1", "B2", "C3"],
              },
              nodes: [
                {
                  node: { type: "label", value: "Label X" },
                },
              ],
            },
          ],
        },
      ],
    };

    const t2 = {
      node: { type: "label", value: "Label 2: Vet Drugs" },
      nodes: [
        {
          node: { type: "label", value: "Label 2.1" },
          nodes: [
            {
              node: { type: "label", value: "Label 2.2A" },
            },
            {
              node: { type: "label", value: "Label 2.2B" },
            },
            {
              node: { type: "label", value: "Label 2.2C" },
            },
            {
              node: { type: "label", value: "Label 2.3" },
              nodes: [
                {
                  node: { type: "label", value: "Label 2.4" },
                },
              ],
            },
          ],
        },
        {
          node: { type: "label", value: "Label 2.5" },
        },
      ],
    };
    let treeMap = {};
    treeMap.A = t1;
    treeMap.B = t2;
    // treeMap.C = t3;

    this.treeMap = treeMap;
    this.tree = this.treeMap[this.selected];
  },
};
</script>

<style lang="scss" scoped>
.tree-menu-container {
  background: #7cc4ff;
  color: darkblue;
  min-width: 240px;
  min-height: 300px;
  border: 1px solid blue;
  select {
    border: 0;
    background: #2196f3;
    font-size: 18px;
    color: white;
    padding: 10px;
    width: 100%;
    text-align: left;
  }
}
</style>
