<template>
  <div class="container container-wide">
    <header class="header">
      <div class="header-title">
        <img :src="countryFlag" class="country-flag" width="52" />
        <div class="right">
          <h1 v-if="selectedCountry">
            {{ selectedCountry.country }} <span>Overview</span>
          </h1>
          <h1 v-else>Global <span>Statistics</span></h1>
          <span class="date">{{ getDataDate }}</span>
        </div>
      </div>
      <AppSearch
        :items="getCountries"
        filterBy="country"
        @selectedItem="onSelected"
      />
    </header>
  </div>
</template>

<script>
import AppSearch from "@/components/AppSearch";
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  components: {
    AppSearch
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      selectedCountry: null
    };
  },
  computed: {
    ...mapGetters(["getCountries", "getDataDate"]),
    countryFlag() {
      return this.selectedCountry
        ? `${this.publicPath}flags/${this.selectedCountry.alpha2Code}.png`
        : `${this.publicPath}flags/global.png`;
    },
    country() {
      return true;
    }
  },
  methods: {
    onSelected(value) {
      this.selectedCountry = value;
      this.$emit("selectedItem", this.selectedCountry);
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #fff;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.07);
  padding-left: 30px;
  padding-right: 30px;

  .header-title {
    display: flex;
    align-items: center;
    .right {
      margin-left: 10px;
      line-height: 20px;
    }
    h1 {
      font-size: 20px;
      font-weight: 800;
      color: rgb(var(--gray-3));
      span {
        font-weight: 500;
      }
    }
    .date {
      font-size: 13px;
      font-weight: 500;
      color: rgb(var(--gray-1));
    }
  }

  @media (--t-sm) {
    flex-direction: column;
    height: auto;
    padding: 20px 30px;
    .header-title {
      h1 {
        font-size: 18px;
      }
    }
  }
}
</style>
