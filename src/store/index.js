import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    charactersData: {},
    nameQuery: "",
    statusQuery: "",
    pageQuery: 1,
  },
  getters: {
    getCharactersData: (state) => {
      return state.charactersData;
    },
    getNameQuery: (state) => {
      return state.nameQuery;
    },
    getStatusQuery: (state) => {
      return state.statusQuery;
    },
  },
  actions: {
    fetchCharactersData({ commit }, queryParams) {
      axios
        .get("https://rickandmortyapi.com/api/character", {
          params: queryParams,
        })
        .then((response) => response.data)
        .then((data) => {
          commit("SET_CHARACTERS_DATA", data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            commit("SET_CHARACTERS_DATA", null);
          } else {
            console.log(error);
          }
        });
    },
  },
  mutations: {
    SET_CHARACTERS_DATA(state, charactersData) {
      state.charactersData = charactersData;
    },
    SET_NAME_QUERY(state, nameQuery) {
      state.nameQuery = nameQuery;
    },
    SET_STATUS_QUERY(state, statusQuery) {
      state.statusQuery = statusQuery;
    },
    SET_PAGE_QUERY(state, pageQuery) {
      state.pageQuery = pageQuery;
    },
  },
});
