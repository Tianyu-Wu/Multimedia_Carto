<template>
  <div fill-height color="#F3EBE3">
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">The booming cities</h2>
      <div class="py-5"></div>
    </v-container>

    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="map">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text
            class="display-2 font-weight-bold"
          >Over half of the world’s population live in urban areas</v-card-text>
          <div class="py-5"></div>

          <v-card-text>In 2018, 4.2 billion people, 55 percent of the world’s population, lived in cities. By 2050, the urban population is expected to reach 6.5 billion.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
#map {
  width: 100%;
  height: 600px;
}
</style>