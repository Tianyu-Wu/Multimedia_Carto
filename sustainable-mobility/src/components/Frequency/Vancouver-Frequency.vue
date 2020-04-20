<template>
  <v-container>
    <div class="sidebar pad2">Listing</div>
    <div id="map" class="map pad2">Map</div>
  </v-container>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "Vancouver-Frequency",
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
        zoom: 14
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
body {
  background: #404040;
  color: #f8f8f8;
  font: 500 20px/26px "Helvetica Neue", Helvetica, Arial, Sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}

/* The page is split between map and sidebar - the sidebar gets 1/3, map
gets 2/3 of the page. You can adjust this to your personal liking. */
.sidebar {
  width: 33.3333%;
}

.map {
  border-left: 1px solid #fff;
  position: absolute;
  left: 33.3333%;
  width: 66.6666%;
  top: 0;
  bottom: 0;
}

.pad2 {
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
