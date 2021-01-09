<template>
    <ul class="grid-container" :class="page">
      <li class="title">{{ title }}</li>
      <li class="block" v-for="item in items" :key="item.id" :class="item.abbr">    
        <slot v-bind="item">{{item.name}}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CardLayout",
  props: [ 'title', 'items', 'page' ],
};
</script>


