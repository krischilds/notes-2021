<template>
  <div>
    <!--
        :backgroundColor="getStyle.backgroundColor" :color="getStyle.color"
        -->
   
    <pre>{{ themeNames }}</pre>
    <v-select
      v-if="themeNames"
      :items="themeNames"
      label="Select Theme"
      v-model="appSelected"
      @change="changeTheme"
      dense
    ></v-select>

    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Theme</div>
          <v-list-item-title class="headline mb-1">
            Is Dark: 
          </v-list-item-title>
          <v-list-item-subtitle
            >Theme Info</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="theme.getColor"></v-list-item-avatar>
        <v-list-item-avatar tile size="80" color="theme.getBackground"></v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn outlined rounded text color="theme.getColor"> Change Theme </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import themesMixin from "../mixins/themesMixin";

export default {
  name: "Themes",
  mixins: [themesMixin],
  props: {
    pageTitle: {
      type: String,
      default: "Themes",
    },
  },
  data() {
    return {
      appSelected: null,
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
</style>