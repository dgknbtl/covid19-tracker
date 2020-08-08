<template>
  <div class="container section-gap">
    <div class="table-card">
      <div class="section-title">COUNTRIES AFFECTED</div>
      <table class="table">
        <thead>
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
          <tr>
            <td class="country">
              <img :src="countryFlag" width="22" />
              Turkey
            </td>
            <td>2,0000,000</td>
            <td>1,500</td>
            <td>5,812</td>
            <td>16</td>
            <td>250,222</td>
            <td>1,234</td>
          </tr>
          <tr>
            <td class="country">
              <img :src="countryFlag" width="22" />
              Turkey
            </td>
            <td>200,000</td>
            <td>1,500</td>
            <td>5,812</td>
            <td>16</td>
            <td>250,222</td>
            <td>1,234</td>
          </tr>
          <tr>
            <td class="country">
              <img :src="countryFlag" width="22" />
              Turkey
            </td>
            <td>200,000</td>
            <td>1,500</td>
            <td>5,812</td>
            <td>16</td>
            <td>250,222</td>
            <td>1,234</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTable",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },

  computed: {
    countryFlag() {
      return `${this.publicPath}flags/TR.png`;
    }
  }
};
</script>

<style scoped>
.table-card {
  background-color: #fff;
  border-radius: var(--border-radius);
}

.table {
  border-collapse: collapse;
  width: 100%;
  thead {
    background-color: rgb(var(--light), 0.5);
    tr {
      th {
        text-align: left;
        padding: 10px 30px;
        font-size: 11px;
        font-weight: 600;
        color: rgb(var(--gray-2));
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
        padding: 10px 30px;
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
