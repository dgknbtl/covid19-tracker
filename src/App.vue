<template>
  <div class="app">
    <main class="main">
      <AppHeader @selectedItem="onSelected" />
      <AppSummary :selectedItem="selectedItem" />
      <AppChart :selectedItem="selectedItem" />
      <AppTable />
      <AppFooter />
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppSummary from "@/components/AppSummary";
import AppChart from "@/components/AppChart";
import AppTable from "@/components/AppTable";
import AppFooter from "@/components/AppFooter";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    AppSummary,
    AppChart,
    AppTable,
    AppFooter
  },
  data() {
    return {
      selectedItem: null
    };
  },
  methods: {
    ...mapActions(["fetchCountries", "fetchSummaryData"]),
    onSelected(value) {
      this.selectedItem = value;
    }
  },
  created() {
    this.fetchCountries();
    this.fetchSummaryData();
  }
};
</script>

<style scoped>
.main {
  @media (--d-sm) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
