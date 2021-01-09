<template>
  <div>
    <div>
      <note-form>
        <h4 slot="header">Create Note <small>{{ today }}</small></h4>
        <div slot="button">
          <b-button type="submit">Save</b-button>
        </div>
      </note-form>

      <note-form>
        <h4 slot="header">Create Comment</h4>
      </note-form>
    </div>
    
    <div>Notes: TODO: Show all notes</div>
    <div>
      {{ getUsername }}
    </div>
  </div>
</template>

<script>
import NoteForm from '../components/Notes/NoteForm.vue';

export default {
  components: { NoteForm },
  name: "NotesOld",
  methods: {},
  data() {
    return {
      user: "Kris Childs",
      today: new Date()
    };
  },
  computed: {
    getUsername() {
      return this.$store.getters.getUsername;
    },
  },
};
</script>

<style lang="scss" scoped></style>
