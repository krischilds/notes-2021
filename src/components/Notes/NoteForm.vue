<template>
  <section class="p-5 m-5 note-form">
    <slot name="header">Note Header</slot>

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
      <div class="mt-2 mb-0">{{ form.noteText }}</div>

      <b-form-input
        class="form-control"
        v-model.number="form.priority"
        :state="form.priority > 0 && form.priority <= 10"
        required
      ></b-form-input>

      <b-form-checkbox
        v-model="form.accepted"
        value="accepted"
        unchecked-value="not_accepted"
        class="form-control"
        name="form-accepted"
        :state="form.accepted === 'accepted'"
      >
        I accept the terms and use
      </b-form-checkbox>

      <div>
        Accepted: <strong>{{ form.accepted }}</strong>
      </div>
      <div>
        Form Valid: <strong>{{ form.valid }}</strong>
      </div>

      <div v-if="hasSubmittedForm">
        <b-alert v-if="isFormComplete" :show="isFormComplete" variant="success">
          Form is complete
        </b-alert>
        <b-alert v-else :show="!isFormComplete" variant="danger">
          Form is not complete
        </b-alert>
      </div>
      <slot name="button"><b-button type="submit">Submit</b-button></slot>
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
      hasSubmittedForm: false,
      form: {
        name: "",
        hasSubmitted: false,
        isVisible: true,
        noteText: "",
        noteTitle: "",
        priority: 0,
        accepted: false,
        valid: false,
      },
    };
  },
  computed: {
    nameState() {
      return this.form.name.length > 2 ? true : false;
    },
    isNoteTextValid: function () {
      return this.form.noteText.length >= 10;
    },
    isFormComplete: function () {
      const isComplete =
        this.form.noteText &&
        this.form.noteText.length > 0 &&
        this.form.accepted === "accepted";
      return isComplete;
    },
  },
  methods: {
    createNote: function () {
      console.log("createNote");
      this.$store.commit("saveNote", this.form);
    },
    validate() {
      if (this.isFormComplete) {
        this.form.valid = true;
      } else {
        this.form.valid = false;
      }
    },
    onSubmit(evt) {
      this.hasSubmittedForm = true;
      evt.preventDefault();

      this.validate();
      if (this.form.valid) {
        this.createNote();
        this.$store.commit("saveUsername", this.form.noteText);
        const formData = JSON.stringify(this.form);
        console.log(formData);
        // router.push({ name: "ViewNote", params: { form: formData } }); // -> /user/123
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.noteText = "";
      this.form.noteTitle = "";
      this.form.accepted = "not_accepted";

      // Trick to reset/clear native browser form validation state
      this.form.isVisible = false;
      this.$nextTick(() => {
        this.form.isVisible = true;
      });
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="scss" scoped>
.note-form {
  background-color: whitesmoke;
  border: 4px solid rgb(207, 207, 207);
  border-radius: 2px;
}
</style>
