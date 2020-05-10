<template>
  <!-- TBD, toggle for different background maps, hover functions -->
  <div>
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">
        Transport-related Green House Gas (GHG) Emissions per Capita 
      </h2>
      <div class="py-5"></div>
    </v-container>

    <div id="map_GHG">Map</div>

    <div class="title font-weight-light mb-5">
      This map displays the transpot-related carbon emission per capita. It can be seen that the GHG per capita in 
      developed countries is generally higher than what it is in developing countries. However, it is interesting that
      GHG per capita in North America is significantly higher than Europe, despite that both are developed regions.
  </div>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";
// import mapboxgl from "mapbox-gl";

export default {
  name: "CurrentStatus",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      this.map = new mapboxgl.Map({
        container: "map_GHG",
        style: "mapbox://styles/mmcartog01/ck9wvlx900sdg1ipcb5t5nd0g",
        center: [14.880, 46.861],
        zoom: 2.0
      });
      console.log(mapboxgl.accessToken);
      console.log(this.map);
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
#map_GHG {
  width: 100%;
  height: 600px;
}
</style>
