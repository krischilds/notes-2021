<template>
<div>
  <button @click="toggleTheme">Change Theme {{theme}}</button>

    <v-alert
      border="top"
      color="red lighten-2"
      dark
    >
      I'm an alert with a top border and red color
    </v-alert>
    <v-alert
      border="right"
      color="blue-grey"
      dark
    >
      I'm an alert with a right border and blue-grey color
    </v-alert>
    <v-alert
      border="bottom"
      color="pink darken-1"
      dark
    >
      I'm an alert with a bottom border and pink color
    </v-alert>

    <v-alert
      border="left"
      color="indigo"
      dark
    > I'm an alert with a border left type info
    </v-alert>

    <v-row justify="space-around">
    <v-avatar color="indigo">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>

    <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>

    <v-avatar color="red">
      <span class="white--text headline">CJ</span>
    </v-avatar>
  </v-row>
  <v-row>
    <v-card
    dark
    flat
  >
    <v-toolbar
      flat
      height="72"
    >
      <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        inset
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
    </v-toolbar>

    <v-card-text>
        <v-list>
          <v-subheader>I inherit dark from my parent</v-subheader>

          <v-list-item
            v-for="item in items"
            :key="item"
          >
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider class="mb-y"></v-divider>

        <v-theme-provider root>
          <v-list rounded="b">
            <v-subheader>
              <span>I inherit from the root</span>

              <strong>&nbsp;$vuetify.theme.dark</strong>
            </v-subheader>

            <v-list-item
              v-for="item in items"
              :key="item"
            >
              <v-list-item-title v-text="item"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-theme-provider>
      </v-card-text>
    </v-card>
    </v-row>

</div>
</template>
<script>

export default {
  data() {
    return {
      theme: 'light' // default theme to use when the site is first loaded
    }
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme // this is where the magic happens
    } // the `dataset.theme` is the data-theme attribute I set in my SCSS file (highlighted above)
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light' // switch themes based on current value of `this.theme`
    }
  }
}
</script>