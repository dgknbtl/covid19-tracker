<template>
  <div class="container container-wide">
    <header class="header">
      <div class="header-title">
        <img :src="countryFlag" class="country-flag" width="38" />
        <h1>Turkey <span>Overview</span></h1>
      </div>
      <div class="header-search">
        <input
          type="text"
          class="search-input"
          placeholder="Search a Country"
        />
        <SearchIcon size="1.5x" class="search-icon" />
      </div>
    </header>
  </div>
</template>

<script>
import { SearchIcon } from "vue-feather-icons";

export default {
  name: "AppHeader",
  components: {
    SearchIcon
  },
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
  .header-search {
    position: relative;
    width: 280px;
    .search-input {
      width: 100%;
      height: 50px;
      background-color: rgb(var(--light));
      border-radius: var(--border-radius);
      text-align: center;
      font-size: 16px;
      border: 2px solid transparent;
      transition: all 300ms;
      padding-left: 50px;
      padding-right: 50px;
      font-weight: 500;
      &:focus {
        background-color: white;
        border-color: rgb(var(--light));
      }
    }
    .search-icon {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
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
    .header-search {
      margin-top: 10px;
      width: 100%;
      max-width: 400px;
    }
  }
}
</style>
