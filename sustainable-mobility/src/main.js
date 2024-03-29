import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueGoogleCharts from "vue-google-charts";

Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

export const mapboxgl = window.mapboxgl;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
