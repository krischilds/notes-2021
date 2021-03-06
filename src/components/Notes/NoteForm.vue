<template>
  <section class="note-form">
    <slot name="note-header">Note Header</slot>

    <b-form @submit="onSubmit" @reset="onReset" v-if="form.isVisible">
      <b-form-textarea
        class="form-control"
        v-model="form.noteText"
        debounce="500"
        rows="3"
        max-rows="5"
        :state="isNoteTextValid"
      ></b-form-textarea>
      <div class="error-message" v-if="!isNoteTextValid">
        The note text is invalid.
      </div>
      <!-- TODO: Make this dynamic input/type/validation rules -->
      <b-form-input
        :id="`type-${type}`"
        :type="`number`"
        v-model.number="form.priority"
        class="form-control"
        :state="form.priority > 0 && form.priority <= 10"
      ></b-form-input>

      <div>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>

      <div>
        <b-dropdown id="dropdown-1" text="Items" class="m-md-2">
          <b-dropdown-item v-for="item in form.items" :key="item.id">{{
            item.itemType
          }}</b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <select id="dropdown-2" text="Items" class="m-md-2">
          <option v-for="item in form.items" :key="item.id">
            {{ item.itemType }}
          </option>
        </select>
      </div>
      <div>
        Form Valid: <strong>{{ form.valid }}</strong>
      </div>

      <div v-if="form.hasSubmitted">
        <b-alert v-if="isFormComplete" :show="isFormComplete" variant="success">
          Note created
        </b-alert>
        <b-alert v-else :show="!isFormComplete" variant="danger">
          Note has not been created
        </b-alert>
      </div>
      <slot name="button"
        ><b-button type="submit" :disabled="!isFormComplete"
          >Submit</b-button
        ></slot
      >
    </b-form>
  </section>
</template>

<script>
import router from "../../router";

export default {
  name: "NoteForm",
  props: [],
  data() {
    return {
      type: "number",
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
    console.log(this);

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
  background-color: whitesmoke;
  border: 4px solid rgb(207, 207, 207);
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
