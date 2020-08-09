<template>
  <div class="container section-gap" v-show="!loader">
    <div class="chart-card">
      <div class="section-title">PAST 15 DAYS CHART OF TURKEY</div>
      <VueApexCharts
        height="500"
        type="bar"
        :options="options"
        :series="series"
      ></VueApexCharts>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AppChart",
  props: ["selectedItem"],
  components: {
    VueApexCharts
  },

  data() {
    return {
      countryCode: "",
      loader: true,

      series: [],
      options: {
        chart: {
          type: "bar",
          height: 400,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetX: 40
        }
      }
    };
  },
  computed: {
    ...mapGetters(["get15DaysData"])
  },
  methods: {
    ...mapActions(["fetchCountryData"]),
    async fetchData() {
      await this.$store.dispatch("fetchCountryData", this.countryCode);
      await this.fillData();
    },
    fillData() {
      const confirmed = this.get15DaysData.map(item => item.Confirmed);
      const deaths = this.get15DaysData.map(item => item.Deaths);
      const recovered = this.get15DaysData.map(item => item.Recovered);
      const date = this.get15DaysData.map(item => item.Date);
      this.series = [
        {
          name: "Confirmed",
          data: confirmed
        },
        {
          name: "Deaths",
          data: deaths
        },
        {
          name: "Recovered",
          data: recovered
        }
      ];
      this.options = {
        xaxis: {
          categories: date
        }
      };
    }
  },
  watch: {
    selectedItem(val) {
      this.countryCode = val.alpha2Code;
      this.fetchData();
    },
    get15DaysData() {
      if (this.get15DaysData.length) {
        this.loader = false;
      } else {
        this.loader = true;
      }
    }
  }
};
</script>

<style scoped>
.chart-card {
  min-height: 400px;
  background-color: #fff;
  border-radius: var(--border-radius);
}
</style>
