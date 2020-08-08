<template>
  <div class="container section-gap">
    <div class="card-list">
      <div class="card-summary card-1">
        <span class="label">TOTAL CASES</span>
        <div class="value">
          {{ numberFormat(getWorldSummary.TotalConfirmed) }}
        </div>
      </div>
      <div class="card-summary card-2">
        <span class="label">TOTAL DEATHS</span>
        <div class="value">
          {{ numberFormat(getWorldSummary.TotalDeaths) }}
        </div>
      </div>
      <div class="card-summary card-3">
        <span class="label">TOTAL RECOVERED</span>
        <div class="value">
          {{ numberFormat(getWorldSummary.TotalRecovered) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppSummaryCards",
  computed: {
    ...mapGetters(["getWorldSummary"])
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
  height: 120px;
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
  }

  &.card-1 {
    &::before {
      background-color: rgb(var(--primary));
    }
    .value {
      color: rgb(var(--primary));
    }
    &:hover {
      border-color: rgb(var(--primary));
      box-shadow: 0 0 30px rgba(var(--primary), 0.2);
    }
  }

  &.card-2 {
    &::before {
      background-color: rgb(var(--second));
    }
    .value {
      color: rgb(var(--second));
    }
    &:hover {
      border-color: rgb(var(--second));
      box-shadow: 0 0 30px rgba(var(--second), 0.2);
    }
  }

  &.card-3 {
    &::before {
      background-color: rgb(var(--third));
    }
    .value {
      color: rgb(var(--third));
    }
    &:hover {
      border-color: rgb(var(--third));
      box-shadow: 0 0 30px rgba(var(--third), 0.2);
    }
  }
}
</style>
