import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiBase: "https://api.covid19api.com",
    totalWorldData: {},
    countries: [],
    countryData: [],
    countrySummaryData: []
  },
  getters: {
    getCountries(state) {
      return state.countries;
    }
  },
  mutations: {
    ["SET_COUNTRIES"](state, value) {
      state.countries = value;
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
    }
  }
});
