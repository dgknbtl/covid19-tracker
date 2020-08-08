<template>
  <div class="container container-wide">
    <header class="header">
      <div class="header-title">
        <img :src="countryFlag" class="country-flag" width="38" />
        <h1>Turkey <span>Overview</span></h1>
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
    ...mapGetters(["getCountries"]),
    countryFlag() {
      // return this.selectedCountry
      //   ? `${this.publicPath}flags/${this.selectedCountry.alpha2Code}.png`
      //   : `${this.publicPath}flags/global.png`;
      // return  `${this.publicPath}flags/TR.png`;
      return true;
    }
  },
  watch: {
    selectedCountry(first, last) {
      console.log(first, last);
    }
  },
  methods: {
    onSelected(value) {
      this.selectedCountry = value;
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
    h1 {
      font-size: 22px;
      font-weight: 800;
      color: rgb(var(--gray-2));
      margin-left: 10px;
      span {
        font-weight: 500;
      }
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
