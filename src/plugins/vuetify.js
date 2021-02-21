// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import themeInterface from '../themesInterface';
Vue.use(Vuetify);

const theme = themeInterface.getThemeSelected();
const vuetify = new Vuetify({
  theme: {
    themes: {
        dark: theme.dark,
        light: theme.light,
      },    
  },
})

export default vuetify