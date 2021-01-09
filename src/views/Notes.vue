<template>
  <div>
    <section class="page-title-section">
      <div
        class="page-title"
        :class="{ 'page-title-sticky': scrollPosition > 20 }"
      >
        {{ pageTitle }}
      </div>
    </section>
    <div class="page-layout__2-cols">
      <nav class="form-1">
        <note-form></note-form>
      </nav>
      <div class="view-1">
        <CardLayout :items="getNotes" :title="`Notes`" :page="`notes`">
          <template scope="item">
            <div style="min-width:400px">
              <div>{{ item.note }}</div>
              <div>{{ item.dateCreated }}</div>
              <div>{{ item.priority }}</div>
            </div>
          </template>
        </CardLayout>

        <div id="sticky">
          <button :class="{ 'fixed-button': isFixed }">Show Message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NotesView from "../components/Notes/NotesView.vue";
import NoteForm from "../components/Notes/NoteForm.vue";
import CardLayout from "../components/General/CardLayout.vue";
// import Debug from "../components/General/Debug";

export default {
  name: "Notes",
  components: { CardLayout, NoteForm },
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
    getNotes() {
      return this.$store.getters.getNotes;
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

<style lang="scss">
.fixed-button {
  position: fixed;
  bottom: 40px;
  right: 20px;
  background: rgb(6, 103, 168);
  color: white;
}

.page-title-section {
  border: 2px solid rgb(255, 199, 14);
}

.page-title {
  font-size: 1rem;
  font-weight: bold;
  color: darkorange;
}

.page-title-sticky {
  position: fixed;
  left: 20px;
  top: 20px;
  background: lightblue;
  color: darkcyan;
}

.page-layout__2-cols {
  display: flex;
  justify-content: space-between;

  .form-1 {
    flex: 1;
    padding: 10px;
  }

  .grid-container {
    flex: 4;
  }
}

.block {
  border: 2px solid gray;
  border-radius: 4px;
  min-height: 400px;
}

.grid-container.notes {
  display: grid;
  list-style: none;
  grid-template:
    "title title title"
    "form1 view1 view1";
  grid-gap: 10px;
  padding: 10px;
  align-content: stretch;
}

.title {
  color: rgb(3, 123, 153);
  font-size: 1.5rem;
  grid-area: title;
}

.form-1 {
  background: orange;
  grid-area: form1;
}
.view-1 {
  background: rgb(0, 217, 255);
  grid-area: view1;
}
</style>