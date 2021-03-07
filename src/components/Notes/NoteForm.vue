<template>
  <section v-if="theme" class="note-form primary">
    <slot name="note-header">Note Header</slot>
    <v-form @submit="onSubmit" @reset="onReset" v-if="form.isVisible">      
      <div>
        <h3>COLORS:  BG: {{ theme.backgroundColor }} : TEXT: {{ theme.color }}</h3>
        <v-text-field
          dark
          :background-color="theme.backgroundColor"
          :color="theme.color"
          label="Main input"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <hr />
        <v-text-field
          :background-color="theme.backgroundColor"
          :color="theme.color"
          label="Another input"
        ></v-text-field>
        <v-btn
          dark
          :style="{ color: theme.color, background: theme.backgroundColor }"
        >
          Red Dark
        </v-btn>
        <v-btn light        
        :style="{ color: theme.color, background: theme.backgroundColor }"
        > Blue Light </v-btn>
      </div>
    </v-form>
  </section>
</template>

<script>
import router from "../../router";
import {themes} from '../../themes';
import themesMixin from "../../mixins/themesMixin";

export default {
  name: "NoteForm",
  mixins: [themesMixin],
  watch: {
        '$store.getters.getTheme': function (newVal, oldVal) {
            console.log("$$$$$$$  themesMixin:watch:$store.getters.getTheme");
            // this.theme = newVal;
        }
    },
  data() {
    return {
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      form: {
        hasSubmitted: false,
        isVisible: true,
        noteText: "",
        items: [],
        priority: 1,
        valid: false,
      },
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  computed: {
    isNoteTextValid: function () {
      return this.form.noteText.length > 0;
    },
    isFormComplete: function () {
      const isComplete = this.form.noteText && this.form.noteText.length > 0;
      return isComplete;
    },
  },
  methods: {
    createNote: function () {
      console.log("createNote");
      this.$store.commit("addNote", this.form);
    },
    validate() {
      if (this.isFormComplete) {
        this.form.valid = true;
      } else {
        this.form.valid = false;
      }
    },
    changeTheme(key) {
            console.log("themesMixin:changeTheme:" + key);
            console.log(themes);
            let theme = themes[key];
            if (!theme) return;

            this.$store.commit("setTheme", isDark ? theme.dark : theme.light);
            //this.backgroundColor=theme.backgroundColor;
            //this.color=theme.color; // TODO: this is overwriting a prop.  change it
            // this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val
    },
    onSubmit(evt) {
      this.form.hasSubmitted = true;
      evt.preventDefault();

      this.validate();
      if (this.form.valid) {
        this.createNote();
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.noteText = "";

      // Trick to reset/clear native browser form validation state
      this.form.isVisible = false;
      this.$nextTick(() => {
        this.form.isVisible = true;
      });
    },
  },
  mounted() {
    console.log("NoteForm");
    console.log(this.theme);
    this.form.items = [
      { itemType: "pencil", id: 1 },
      { itemType: "pencil-red", id: 2 },
      { itemType: "pencil-green", id: 3 },
      { itemType: "pencil-blue", id: 4 },
    ];

    for (let i = 0; i < 100; i++) {
      let j = { itemType: `pencil-${i}`, id: i };
      this.form.items.push(j);

      let jj = { value: `a${i}`, text: `option ${i}` };
      this.options.push(jj);
    }
  },
};
</script>

<style lang="scss" scoped>
.note-form {
  border-radius: 0;
}

textarea {
  &.form-control {
    overflow-y: auto !important;
  }

  &.was-validated &.form-control:valid,
  &.form-control.is-valid {
    background-position: right calc(1rem) center;
  }
}
</style>

