<template>
  <div>
    <v-row>
      <v-col>style="background: $vuetify.theme.dark.background"
      <v-btn @click="toggleTheme">Change Theme {{ theme }}</v-btn>
      <v-btn color="orange" @click="changeColor">Change Colors</v-btn>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-icon large color="success darken-1"> mdi-domain </v-icon>
      <v-icon large color="primary darken-1"> mdi-message-text </v-icon>
      <v-icon large color="success lighten-2"> mdi-dialpad </v-icon>
      <v-icon large color="primary lighten-2"> mdi-email </v-icon>
      <v-icon large color="success"> mdi-call-split </v-icon>
      <v-icon large color="primary">
        mdi-arrow-up-bold-box-outline
      </v-icon>
    </v-row>
    <v-row>
      <v-alert border="right" color="success">
        I'm an alert with a right border and blue-grey color
      </v-alert>
      <v-alert border="bottom" color="success">
        I'm an alert with a bottom border and pink color
      </v-alert>
      <v-alert border="left" color="primary">
        I'm an alert with a border left type info
      </v-alert>
    </v-row>

    <v-row justify="space-around">
      <v-avatar color="primary">
        <v-icon> mdi-account-circle </v-icon>
      </v-avatar>

      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>

      <v-avatar color="primary">
        <span class="headline">CJ</span>
      </v-avatar>
    </v-row>
    <v-row>
      <v-card dark flat>
        <v-toolbar flat height="72">
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

            <v-list-item v-for="item in items" :key="item">
              <v-list-item-title v-text="item"></v-list-item-title>
            </v-list-item>
          </v-list>

          <v-divider class="mb-y"></v-divider>

          <v-theme-provider root>
            <v-list :rounded="true">
              <v-subheader>
                <span>I inherit from the root</span>

                <strong>&nbsp;$vuetify.theme.dark</strong>
              </v-subheader>

              <v-list-item v-for="item in items" :key="item">
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

import themesMixin from "../mixins/themesMixin";

export default {
  data() {
    return {
      theme: "light", // default theme to use when the site is first loaded
      items: ["one", "two"],
    };
  },
  watch: {
    theme(theme) {

      console.log(theme);
      // document.documentElement.dataset.theme = theme; 
      // this is where the magic happens
     // the `dataset.theme` is the data-theme attribute I set in my SCSS file (highlighted above)
      //this.$vuetify.theme.dark = (theme === 'dark');
    },
  },
  methods: {
    /*
            return this.$vuetify.theme.isDark
                  ? this.$vuetify.theme.themes.dark
                  : this.$vuetify.theme.themes.light;   
            }

            
            */
    toggleTheme() {
      //this.theme = this.theme === "light" ? "dark" : "light"; // switch themes based on current value of `this.theme`
      const c = this.$vuetify.theme;
      c.isDark = !c.isDark;
    },
    changeColor(e) {
      const c = this.$vuetify.theme;
      console.log(c);
      if (this.theme === "light") {
        /*
        this.$vuetify.theme.themes.light.primary = "#0000FF";
        this.$vuetify.theme.themes.dark.primary = "#0000FF";
        this.$vuetify.theme.themes.light.success = "#00FF00";
        this.$vuetify.theme.themes.dark.success = "#00FF00";     
        */   
        this.theme = "dark";
      } else {
        /*
        this.$vuetify.theme.themes.light.primary = "#FF0000";
        this.$vuetify.theme.themes.dark.primary = "#FF0000";
        this.$vuetify.theme.themes.light.success = "#0000F0";
        this.$vuetify.theme.themes.dark.success = "#0000F0";
        */
        this.theme = "light";
      }
    },
  },
  mounted() {
    console.log("ThemeChanger.vue");
    console.log(this);
  },
};
</script>