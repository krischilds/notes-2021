<template>
  <div class="card">
    <div class="title">
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="scss" scoped>
.card {
  background: lightgoldenrodyellow;
  border: 2px solid yellow;
  .title {
    color: rgb(0, 120, 218);
    font-size: 1.5rem;
  }
}
</style>