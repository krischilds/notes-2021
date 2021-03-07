<template>
  <div class="notes-page-layout">
  
    <note-form class="note-form"></note-form>
    <notes-view
      class="notes-view"
      :items="getNotes"
      :title="`Notes`"
    ></notes-view>

    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle
            >Application Subtitle</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
      <v-list-item v-for="(item,i) in getNotes" :key="i">
        <div style="min-width: 200px;">
          <div>{{ item.note }}</div>
          <div>{{ item.dateCreated }}</div>
          <div>{{ item.priority }}</div>
        </div>
      </v-list-item>
      <v-card-actions>
        <v-btn outlined rounded text> Button </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import NoteForm from "../components/Notes/NoteForm.vue";
import NoteView from "../components/Notes/NoteView.vue";
import NotesView from "../components/Notes/NotesView.vue";

export default {
  name: "Notes",
  components: { NoteForm, NotesView, },
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
      appSelected: null,
    };
  },
  computed: {
    notesLength() {
      const l = this.$store.getters.getNotes
        ? this.$store.getters.getNotes.length
        : 0;
      return l;
    },
    getNotes() {
      let notes = this.$store.getters.getNotes || [];
      console.log("Notes", notes);
      return notes;
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
    // background: lightYellow;
    grid-column: span 1;
  }

  .notes-view {
    // background: cornflowerblue;
    grid-column: span 2;
  }

  .note-view {
    // background: lightblue;
    grid-column: span 3;
  }
}
</style>