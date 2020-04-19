<template>
  <v-container fill-height align="center">
    <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>
    <v-row cols="12">
      <v-col cols="8">
        <div id="map" class="map pad2">Map</div>
      </v-col>
      <v-col cols="4">
        <div class="sidebar pad2">Listing</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "Population",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibW1jYXJ0b2cwMSIsImEiOiJjazk2bHZlbW8wOW5xM250Y2ZkbXNnZGdjIn0.QS71DsIq1oSDNUgEmfA3kg";

      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v10",
        center: [-77.034084, 38.909671],
        zoom: 2
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
/* The page is split between map and sidebar - the sidebar gets 1/3, map
gets 2/3 of the page. You can adjust this to your personal liking. */
/* .sidebar {
  width: 33.3333%;
} */
#map {
  width: 100%;
  height: 700px;
}

/* .pad2 {
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
} */
</style>