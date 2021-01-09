<template>
  <div style="background: lightblue">
    <div></div>
    <div>
      <h5>Note Page</h5>
      <pre>{{ formData }}</pre>
      <div>USERNAME: {{ getUsername }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    form: Object,
  },
  data() {
    return {
      formData: {},
    };
  },
  computed: {
    getUsername() {
      return this.$store.getters.getUsername;
      //this.$store.commit("saveUsername", this.noteText);
    },
  },
  methods: {},
  mounted() {
    this.formData = this.$route.params.form;
  },
};
</script>

<style lang="scss" scoped></style>
