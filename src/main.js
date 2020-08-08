import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./styles/app.css";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    numberFormat(value) {
      return new Intl.NumberFormat({
        maximumSignificantDigits: 3
      }).format(value);
    }
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
