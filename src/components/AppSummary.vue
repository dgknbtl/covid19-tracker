<template>
  <div class="container section-gap">
    <div class="card-list">
      <div class="card-summary card-1" :class="{ loading: loader }">
        <div v-show="!loader">
          <span class="label">TOTAL CASES</span>
          <div class="value">
            {{ numberFormat(totalConfirmed) }}
          </div>
          <div class="value-2" v-show="newConfirmed > 0">
            <span v-if="newConfirmed > 0">+</span>
            {{ numberFormat(newConfirmed) }}
          </div>
        </div>
      </div>

      <div class="card-summary card-2" :class="{ loading: loader }">
        <div v-show="!loader">
          <span class="label">TOTAL DEATHS</span>
          <div class="value">
            {{ numberFormat(totalDeaths) }}
          </div>
          <div class="value-2" v-show="newDeaths > 0">
            <span v-if="newDeaths > 0">+</span> {{ numberFormat(newDeaths) }}
          </div>
        </div>
      </div>

      <div class="card-summary card-3" :class="{ loading: loader }">
        <div v-show="!loader">
          <span class="label">TOTAL RECOVERED</span>
          <div class="value">
            {{ numberFormat(totalRecovered) }}
          </div>
          <div class="value-2" v-show="newRecovered > 0">
            <span v-if="newRecovered > 0">+</span>
            {{ numberFormat(newRecovered) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppSummaryCards",
  props: ["selectedItem"],
  data() {
    return {
      countrySummary: null,
      loader: true
    };
  },
  computed: {
    ...mapGetters(["getWorldSummary", "getCountriesSummary"]),
    totalConfirmed() {
      return this.countrySummary && this.countrySummary.length
        ? this.countrySummary[0].TotalConfirmed
        : this.getWorldSummary.TotalConfirmed;
    },
    totalDeaths() {
      return this.countrySummary && this.countrySummary.length
        ? this.countrySummary[0].TotalDeaths
        : this.getWorldSummary.TotalDeaths;
    },
    totalRecovered() {
      return this.countrySummary && this.countrySummary.length
        ? this.countrySummary[0].TotalRecovered
        : this.getWorldSummary.TotalRecovered;
    },
    newConfirmed() {
      return this.countrySummary && this.countrySummary.length
        ? this.countrySummary[0].NewConfirmed
        : this.getWorldSummary.NewConfirmed;
    },
    newDeaths() {
      return this.countrySummary && this.countrySummary.length
        ? this.countrySummary[0].NewDeaths
        : this.getWorldSummary.NewDeaths;
    },
    newRecovered() {
      return this.countrySummary && this.countrySummary.length
        ? this.countrySummary[0].NewRecovered
        : this.getWorldSummary.NewRecovered;
    }
  },
  watch: {
    selectedItem() {
      this.searchCountry();
    },
    getWorldSummary() {
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
      }, 200);
    },
    countrySummary() {
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
      }, 250);
    }
  },
  methods: {
    searchCountry() {
      if (this.selectedItem) {
        const match = this.getCountriesSummary.filter(
          item => item.CountryCode == this.selectedItem.alpha2Code
        );
        this.countrySummary = match;
        if (!this.countrySummary.length) {
          alert("Data not found for this country!");
          this.countrySummary[0] = {
            TotalConfirmed: 0,
            TotalDeaths: 0,
            TotalRecovered: 0,
            NewConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 0
          };
        }
      }
    }
  },
  mounted() {
    this.searchCountry();
  }
};
</script>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  @media (--t-lg) {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }
}
.card-summary {
  position: relative;
  height: 140px;
  background-color: #fff;
  border-radius: var(--border-radius);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid transparent;
  transition: all 300ms;
  &:hover {
    border-color: #000;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #000;
    width: 30px;
    height: 5px;
  }
  .label {
    font-weight: 500;
    color: rgb(var(--gray-1));
    letter-spacing: -0.5px;
  }
  .value {
    font-weight: 800;
    font-size: 2.6rem;
    margin-top: 2px;
    margin-bottom: 5px;
    &-2 {
      font-weight: 600;
    }
  }

  &.card-1 {
    &::before {
      background-color: rgb(var(--primary));
    }
    .value {
      color: rgb(var(--primary));
      &-2 {
        color: rgba(var(--primary), 0.8);
      }
    }
    &:hover {
      border-color: rgb(var(--primary));
      box-shadow: 0 0 30px rgba(var(--primary), 0.2);
    }
    &.loading {
      &::after {
        border: 5px solid rgba(var(--primary), 0.3);
        border-top-color: rgb(var(--primary));
      }
    }
  }

  &.card-2 {
    &::before {
      background-color: rgb(var(--second));
    }
    .value {
      color: rgb(var(--second));
      &-2 {
        color: rgba(var(--second), 0.8);
      }
    }
    &:hover {
      border-color: rgb(var(--second));
      box-shadow: 0 0 30px rgba(var(--second), 0.2);
    }
    &.loading {
      &::after {
        border: 5px solid rgba(var(--second), 0.3);
        border-top-color: rgb(var(--second));
      }
    }
  }

  &.card-3 {
    &::before {
      background-color: rgb(var(--third));
    }
    .value {
      color: rgb(var(--third));
      &-2 {
        color: rgba(var(--third), 0.8);
      }
    }
    &:hover {
      border-color: rgb(var(--third));
      box-shadow: 0 0 30px rgba(var(--third), 0.2);
    }
    &.loading {
      &::after {
        border: 5px solid rgba(var(--third), 0.3);
        border-top-color: rgb(var(--third));
      }
    }
  }
}
</style>
