<template>
  <div class="container section-gap">
    <div class="table-card">
      <div class="table-card-header">
        <div class="section-title">COUNTRIES AFFECTED</div>
        <input
          type="text"
          :value="searchQuery"
          @input="e => (searchQuery = e.target.value)"
          class="search-input"
          placeholder="Search a Country"
        />
      </div>
      <div class="table-wrapper" :class="{ loading: loader }">
        <div
          class="not-found"
          v-show="!filterData.length && searchQuery.length"
        >
          No matching country found!
        </div>
        <table class="table" v-show="!loader">
          <thead v-show="filterData.length">
            <tr>
              <th>COUNTRY</th>
              <th>CASES</th>
              <th>NEW CASES</th>
              <th>DEATHS</th>
              <th>NEW DEATHS</th>
              <th>RECOVERED</th>
              <th>NEW RECOVERED</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filterData" :key="index">
              <td class="country">
                <img
                  :src="`${publicPath}flags/${item.CountryCode}.png`"
                  width="22"
                />
                {{ item.Country }}
              </td>
              <td>{{ numberFormat(item.TotalConfirmed) }}</td>
              <td :class="{ 'text-primary': item.NewConfirmed > 0 }">
                {{
                  item.NewConfirmed > 0 ? numberFormat(item.NewConfirmed) : ""
                }}
              </td>
              <td>{{ numberFormat(item.TotalDeaths) }}</td>
              <td :class="{ 'text-second': item.NewDeaths > 0 }">
                {{ item.NewDeaths > 0 ? numberFormat(item.NewDeaths) : "" }}
              </td>
              <td>{{ numberFormat(item.TotalRecovered) }}</td>
              <td :class="{ 'text-third': item.NewRecovered > 0 }">
                {{
                  item.NewRecovered > 0 ? numberFormat(item.NewRecovered) : ""
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppTable",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      searchQuery: "",
      loader: true
    };
  },
  computed: {
    ...mapGetters(["getCountriesSummary"]),
    filterData() {
      if (this.searchQuery == "") {
        return this.getCountriesSummary;
      }
      return this.getCountriesSummary.filter(item => {
        return item.Country.toLowerCase().match(this.searchQuery.toLowerCase());
      });
    }
  },
  watch: {
    getCountriesSummary() {
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
      }, 50);
    }
  }
};
</script>

<style scoped>
.table-wrapper {
  position: relative;
  max-height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 100px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(var(--gray-1), 0.5);
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(var(--gray-3));
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(var(--gray-2));
  }
  .not-found {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: rgb(var(--gray-1));
  }
}
.table-card {
  background-color: #fff;
  border-radius: var(--border-radius);
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    .search-input {
      max-width: 200px;
      height: 36px;
      background-color: rgb(var(--light));
      border-radius: var(--border-radius);
      padding: 15px;
    }
  }
}

.table {
  border-collapse: collapse;
  width: 100%;
  position: relative;
  thead {
    background-color: rgba(var(--light), 0.5);
    tr {
      th {
        position: sticky;
        top: 0;
        text-align: left;
        padding: 10px 30px;
        font-size: 11px;
        font-weight: 600;
        color: rgb(var(--gray-2));
        background-color: rgb(var(--light));
        & + th {
          border-left: 1px solid rgba(var(--gray-3), 0.1);
        }
        &:first-child {
          width: 22%;
          /* & ~ th {
            width: 12%;
          } */
        }
      }
    }
  }
  tbody {
    tr {
      &:hover {
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
      }
      & + tr {
        border-top: 1px solid rgba(var(--gray-3), 0.1);
      }
      td {
        padding: 15px 30px;
        font-size: 16px;
        font-weight: 600;
        color: rgb(var(--gray-3));
        & + td {
          border-left: 1px solid rgba(var(--gray-3), 0.1);
        }
        &.country {
          display: flex;
          align-items: center;
          img {
            margin-right: 10px;
            margin-top: -2px;
          }
        }
      }
    }
  }

  @media (--d-sm) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    thead {
      tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }
    }
    tbody {
      tr {
        border-width: 8px !important;
      }
      td {
        border: none;
        border-top: 1px solid rgba(var(--gray-3), 0.1);
        position: relative;
        padding-left: 50%;
        text-align: right;
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 45%;
          white-space: nowrap;
          text-align: left;
          padding: 10px 30px;
          font-size: 13px;
          font-weight: 600;
          color: rgb(var(--gray-2));
        }
        &.country {
          justify-content: flex-end;
        }

        &:nth-of-type(1):before {
          content: "COUNTRY";
        }
        &:nth-of-type(2):before {
          content: "CASES";
        }
        &:nth-of-type(3):before {
          content: "NEW CASES";
        }
        &:nth-of-type(4):before {
          content: "DEATHS";
        }
        &:nth-of-type(5):before {
          content: "NEW DEATHS";
        }
        &:nth-of-type(6):before {
          content: "RECOVERED";
        }
        &:nth-of-type(7):before {
          content: "NEW RECOVERED";
        }
      }
    }
  }
}
</style>
