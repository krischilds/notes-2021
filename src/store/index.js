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
    isDark: false,
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes
    },
    setThemeSelected(state, theme) {
      state.themeSelected = theme;
    },
    setTheme(state, theme) {
      state.theme = theme;
    },
    saveUsername(state, value) {
      state.username = value;
    },
    addNote(state, note) {
      let obj = Object.assign({}, note);
      state.notes.push(obj);
    },
    setThemeIsDark(state, value) {
      state.isDark = value;
    }
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
    getThemeSelected(state) {
      return state.themeSelected;
    },
    getThemeIsDark(state) {
      return state.isDark;
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
