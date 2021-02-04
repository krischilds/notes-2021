import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

// TODO: Move to DB
const themes = {
  vetdrugs: {
    backgroundColor: "darkgreen",
    color: "white",
    primary: "#3f51b5",
    secondary: "#2196f3",
    accent: "#607d8b",
    error: "#f44336",
    warning: "#ffc107",
    info: "#03a9f4",
    success: "#4caf50",
    dark: true,

  },
  pesticides: {
    backgroundColor: "blue",
    color: "white",
    primary: "#3f51b5",
    secondary: "#2196f3",
    accent: "#607d8b",
    error: "#f44336",
    warning: "#ffc107",
    info: "#03a9f4",
    success: "#4caf50",
    dark: true,
  },
  contaminants: {
    backgroundColor: "lightYellow",
    color: "darkBlue",
    primary: "#3f51b5",
    secondary: "#2196f3",
    accent: "#607d8b",
    error: "#f44336",
    warning: "#ffc107",
    info: "#03a9f4",
    success: "#4caf50",
    dark: false,
  },
};

export default new Vuex.Store({
  state: {
    note: {},
    username: "",
    notes: null,
    theme: {},
    appSelected: "vetdrugs", // default
    themes: []
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes
    },
    setAppSelected(state, appSelected) {
      state.appSelected = appSelected;
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
    getAppSelected(state) {
      return state.appSelected;
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
      // This could be from db query
      commit('setThemes', themes);
    }
  }
})
