<template>
  <div>
    <div>
      <div style="margin: 10px">
        <v-select
          v-if="themeNames"
          :items="themeNames"
          label="Select Theme"
          v-model="themeName"
          @change="changeTheme"
          dense
        ></v-select>
      </div>

      <div>themeName: <b>{{ themeName }}</b></div>

      <div>Theme Name</div>
      <div v-if="theme">{{ theme.name }}</div>

      <ul>
        <li v-for="n in themeNames" :key="n">
          <span class="primary text--white" v-if="themeName === n"><b>{{n}}</b></span>
          <span v-else>{{n}}</span>
        </li>
      </ul>

      <div>isDark = {{ isDark }}</div>

      <div>Theme Info</div>
      <div>{{ theme }}</div>

      <div>Theme Names</div>
      <div>{{ themeNames }}</div>

      <div>
         <v-btn rounded :color="primaryColor" :dark="isDark" @click="toggleDarkLight()">
          Toggle Dark/Light: {{(this.isDark ? 'Dark' : 'Light')}}
        </v-btn>
      </div>
      <div>
        <v-btn rounded class="primary" :dark="isDark" @click="setNextTheme()">
          Change Theme
        </v-btn>
      </div>
    </div>
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

    };
  },
  computed: {
    /*
    theme(nv, ov) {
      console.log('theme', nv, ov);

      // document.documentElement.dataset.theme = theme;
      // this is where the magic happens
      // the `dataset.theme` is the data-theme attribute I set in my SCSS file (highlighted above)
      //this.$vuetify.theme.dark = (theme === 'dark');
    },
    */
  },
  methods: {
    setNextTheme() {      
      let newName = this.themeName;
      const names = this.themeNames;
      if (!names) return;
      let index = names.indexOf(this.themeName);
      if (index >=0) {
        if (index < this.themeNames.length-1) {
           newName = this.themeNames[index+1];
        } else {
          newName = this.themeNames[0];
        }
        this.changeTheme(newName);
      } else {
        console.error('theme not found: ' + this.themeName);
      }
      
      //console.log('themeInterface',this.themeInterface);
    },
    toggleDarkLight() {
      this.setIsDark(!this.isDark);
    }

  },
  mounted() {
    console.log(this.theme, this.themeName);
  },
};
</script>

<style lang="scss" scoped>
</style>