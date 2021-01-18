import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

// TODO: Move to DB
const themes = {
  vetdrugs: {
      "backgroundColor": "darkgreen",
      color: "white"
  },
  pesticides: {
      "backgroundColor": "blue",
      color: "white"
  },
  contaminants: {
      "backgroundColor": "lightYellow",
      color: "darkBlue"
  },
};

export default new Vuex.Store({
  state: {
    note: {},
    username: "",
    notes: null,
    theme: {},
    themeSelected: "",
    themes: []
  },
  mutations: {   
    setNotes(state, notes) {
      state.notes = notes
    },
    setThemeSelected(state, themeSelected) {
      state.themeSelected = themeSelected;
    },
    setThemes(state, themes) {
      state.themes = themes;
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
  },
  getters: {
    getNote(state) {
      return state.note;
    },
    getThemeSelected(state) {
      return state.themeSelected;
    },
    getUsername(state) {
      return state.username;
    },
    getNotes(state) {
      return state.notes;
    },
    getThemes(state) {
      console.log("VUEX: getThemes getter");
      return state.themes;
    },
    getTheme(state) {
      console.log("VUEX: getTheme getter");
      return state.theme;
    }
  },
  actions: {
    getNotes({ commit }) {
      axios.get('http://localhost:3000/notes')
        .then(response => {
          commit('setNotes', response.data)
        })
    },
    getThemes({ commit }) {
      console.log("VUEX: getThemes action");
      commit('setThemes', themes);
    }
  }
})
