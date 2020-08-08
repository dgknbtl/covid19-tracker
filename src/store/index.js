import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiBase: "https://api.covid19api.com",
    countries: [],
    worldSummary: [],
    countriesSummary: []
  },
  getters: {
    getCountries(state) {
      return state.countries;
    },
    getWorldSummary(state) {
      return state.worldSummary;
    },
    getCountriesSummary(state) {
      return state.countriesSummary;
    }
  },
  mutations: {
    ["SET_COUNTRIES"](state, value) {
      state.countries = value;
    },
    ["SET_WORLD_SUMMARY"](state, value) {
      state.worldSummary = value;
    },
    ["SET_COUNTRIES_SUMMARY"](state, value) {
      state.countriesSummary = value;
    }
  },
  actions: {
    async fetchCountries({ commit }) {
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/all`
        );
        const data = response.data;
        const countries = data.map(country => {
          const { name, alpha2Code, alpha3Code, flag } = country;
          return {
            country: name,
            alpha2Code,
            alpha3Code,
            flag
          };
        });

        commit("SET_COUNTRIES", countries);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchSummaryData({ commit, state }) {
      try {
        const response = await axios.get(`${state.apiBase}/summary`);
        const global = response.data.Global;
        const countries = response.data.Countries;

        const newCountries = countries
          .map(item => item)
          .sort(function(a, b) {
            return b.TotalConfirmed - a.TotalConfirmed;
          });
        commit("SET_WORLD_SUMMARY", global);
        commit("SET_COUNTRIES_SUMMARY", newCountries);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
