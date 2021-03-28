import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    note: {},
    username: "",
    notes: null,    
    appSelected: null, // default
    theme: null,
    themeIsDark: false,
    themeName: null,
  },
  mutations: {    
    setTheme(state, value) {
      state.theme = value;
    },    
    setThemeIsDark(state, value) {
      state.themeIsDark = value;
    },
    saveUsername(state, value) {
      state.username = value;
    },
    addNote(state, value) {
      let obj = Object.assign({}, value);
      state.notes.push(obj);
    },
    setNotes(state, value) {
      state.notes = value
    },    
  },
  getters: {
    getNote(state) {
      return state.note;
    },
    getUsername(state) {
      return state.username;
    },
    getNotes(state) {
      return state.notes;
    },
    getTheme(state) {
      return state.theme;
    },
    getThemeIsDark(state) {
      return state.themeIsDark;
    },
    getThemeName(state) {
      let name = '';
      if (state.theme) {
        name = state.theme.name;
      }
      return name;
    }
  },
  actions: {
    getNotes({ commit }) {
      axios.get('http://localhost:3000/notes')
        .then(response => {
          commit('setNotes', response.data)
        })
    },
  }
})
