// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {themes} from '../themes';
Vue.use(Vuetify);

const theme = themes[0];
const vuetify = new Vuetify({
  theme: {
    themes: {
        dark: theme.dark,
        light: theme.light,
      },
  },
})

export default vuetify