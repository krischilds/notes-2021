<template>
  <div class="debug">
    <div>{{ name }}</div>
    <div>{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "Debug",
  props: ["name", "value"],
  mounted() {
    console.log(this.name);
    console.log(this.value);
  },
};
</script>

<style lang="scss" scoped>
.debug {
  border: 1 solid red;
  background-color: rgba(255, 192, 203, 0.397);
  color: red;
}
</style>