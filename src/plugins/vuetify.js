// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {themes} from '../themes';
Vue.use(Vuetify);

//  root
// $vuetify.theme.dark

const theme = themes[0];
const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
        dark: theme.dark,
        light: theme.light,
      },
  },
})

export default vuetify