<template>
  <div>
    <div>NOTES VIEW</div>
     <div id="status">{{ notesLength }}</div>
     <ul class="notes-view-layout">
      <li class="title">{{ title }}</li>
      <li class="block" v-for="item in items" :key="item.id" :class="item.abbr">    
       <!-- <slot v-bind="item">{{item.noteText}}</slot> -->
       {{ item.noteText }}
      </li>
    </ul>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: "NotesView",
  data() {
    return {
      notesLength: 1
    }
  },
  props: {
    layout: {
      type: String,
      default: "grid"
    },
    title: {
      type: String,
      default: "Notes View",
    },
    items: {
      type: Array
    }

  },
  watch: {
    "$store.state.notes": {
      handler: function(nv) {
        console.log(nv);
        if (nv && nv.length) {
          this.notesLength = nv.length;
        } else {
          this.notesLength = 1
        }
      },
      immediate: true // provides initial (not changed yet) state
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
