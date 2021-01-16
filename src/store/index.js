import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    note: {},
    username: "",
    notes: null
  },
  mutations: {   
    setNotes(state, notes) {
      state.notes = notes
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
    getUsername(state) {
      return state.username;
    },
    getNotes(state) {
      return state.notes
    }
  },

  actions: {
    getNotes({ commit }) {
      axios.get('http://localhost:3000/notes')
        .then(response => {
          commit('setNotes', response.data)
        })
    }

  }
})
