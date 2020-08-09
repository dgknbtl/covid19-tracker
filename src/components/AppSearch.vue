<template>
  <div>
    <div class="header-search">
      <input
        type="text"
        class="search-input"
        :value="query"
        @input="e => (query = e.target.value)"
        @keydown.enter="selectItem"
        @keydown.up="up"
        @keydown.down="down"
        :placeholder="selectedItem ? selectedItem.country : 'Search a Country'"
      />
      <SearchIcon size="1.5x" class="search-icon" />
      <div class="search-dropdown" v-show="visible" ref="countryList">
        <ul>
          <li
            v-for="(item, index) in matches"
            :key="index"
            :class="{ selected: selected == index }"
            @click="itemClicked(index)"
            v-text="item.country"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchIcon } from "vue-feather-icons";
export default {
  name: "AppSearch",
  props: ["items", "filterBy"],
  components: {
    SearchIcon
  },
  data() {
    return {
      selectedItem: null,
      visible: false,
      query: "",
      selected: 0
    };
  },
  computed: {
    matches() {
      if (this.query == "") {
        return [];
      }
      return this.items.filter(item =>
        item[this.filterBy].toLowerCase().includes(this.query.toLowerCase())
      );
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
    itemClicked(index) {
      this.selected = index;
      this.selectItem();
      this.query = "";
    },
    selectItem() {
      if (!this.matches.length) {
        return;
      }
      this.selectedItem = this.matches[this.selected];
      this.visible = false;
      this.$emit("selectedItem", JSON.parse(JSON.stringify(this.selectedItem)));
    },
    up() {
      if (this.selected == 0) {
        return;
      }
      this.selected -= 1;
      this.scrollToItem();
    },
    down() {
      if (this.selected >= this.matches.length - 1) {
        return;
      }
      this.selected += 1;
      this.scrollToItem();
    },
    scrollToItem() {
      this.$refs.countryList.scrollTop = this.selected * this.itemHeight;
    }
  },
  watch: {
    query() {
      if (this.matches.length) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    }
  }
};
</script>

<style scoped>
.header-search {
  position: relative;
  width: 280px;
  @media (--t-sm) {
    .header-search {
      margin-top: 10px;
      width: 100%;
      max-width: 400px;
    }
  }
  .search-icon {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }

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
  .search-dropdown {
    max-height: 300px;
    overflow-y: scroll;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    width: 100%;
    padding: 10px;
    z-index: 90;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.2);
    border-radius: var(--border-radius);
    ul {
      list-style-type: none;
      li {
        padding: 10px;
        &.selected {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
