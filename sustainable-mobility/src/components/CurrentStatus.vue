<template>
  <div>
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Global sustainable mobility index</h2>
      <div class="py-5"></div>
    </v-container>

    <div id="map2">Map</div>
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
        container: "map2",
        style: "mapbox://styles/mapbox/light-v10",
        center: [-77.034084, 38.909671],
        zoom: 2
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
#map2 {
  width: 100%;
  height: 600px;
}
</style>