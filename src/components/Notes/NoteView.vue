<template>
  <div>
    <slot></slot>
    <div>{{ $route.params.id }}</div>
    <div>View Note {{ id }}</div>
  </div>
</template>

<script>
export default {
  name: "NoteView",
  props: ["id"],
};
</script>

<style lang="scss" scoped></style>
