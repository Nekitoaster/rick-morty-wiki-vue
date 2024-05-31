import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    charactersData: {},
  },
  getters: {
    getCharactersData: (state) => {
      return state.charactersData;
    },
  },
  actions: {
      fetchCharactersData({ commit }, queryParams) {
          try {
            axios
        .get("https://rickandmortyapi.com/api/character", {params: queryParams})
        .then((response) => response.data)
        .then((data) => {
          commit("SET_CHARACTERS_DATA", data);
        });
          } catch (error) {
              console.log(error)
          }
      
    },
  },
  mutations: {
    SET_CHARACTERS_DATA(state, charactersData) {
      state.charactersData = charactersData;
    },
  },
});
