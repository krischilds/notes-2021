<template>
  <div class="notes-page-layout">
      
      <note-form class="note-form"></note-form>    
      <notes-view class="notes-view" :items="getNotes" :title="`Notes`"></notes-view>
      <note-view class="note-view">
        <div>Total Notes: {{ notesLength }}</div>
      </note-view>

    
        <!--
        <CardLayout :items="getNotes" :title="`Notes`" :page="`notes`">
          <template scope="item">
            <div style="min-width:200px">
              <div>{{ item.note }}</div>
              <div>{{ item.dateCreated }}</div>
              <div>{{ item.priority }}</div>
            </div>
          </template>
        </CardLayout>
    -->
     
  </div>
</template>

<script>
import NoteForm from "../components/Notes/NoteForm.vue";
import NotesView from "../components/Notes/NotesView.vue";
import NoteView from "../components/Notes/NoteView.vue";

export default {
  name: "Notes",
  components: { NoteForm, NotesView, NoteView },
  props: {
    pageTitle: {
      type: String,
      default: "Notes",
    },
  },
  data() {
    return {
      windowHeight: 0,
      scrollPosition: 0,
    };
  },
  computed: {
    notesLength() {
      const l = this.$store.getters.getNotes ? this.$store.getters.getNotes.length : 0;
      return l;
    },
    getNotes() {
      let items = this.$store.getters.getNotes;
      console.log("Notes", items);
      return items;
    },
    isFixed() {
      return this.scrollPosition > 0;
    },
  },
  watch: {
    scrollPosition: function (val) {
      if (val > 20) {
        console.log("WATCH: " + val);
      }
    },
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    this.$store.dispatch("getNotes");
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      window.addEventListener("scroll", this.updateScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>

.notes-page-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-gap: 2px;
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;

  .note-form {
    background: lightYellow;
    grid-column: span 1;

  }

  .notes-view {
    background: cornflowerblue;
    grid-column: span 2;
  }

  .note-view {
    background: lightblue;
    grid-column: span 3;
  }

}
</style>