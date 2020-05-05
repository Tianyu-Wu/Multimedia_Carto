<template>
  <div fill-height color="#F3EBE3">
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Vancouver - North America</h2>
      <div class="py-5"></div>
    </v-container>

    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="va-green">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text class="display-2 font-weight-bold"> Green</v-card-text>
          <div class="py-5"></div>

          <v-card-text>Some Stats Here.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "VancouverGreen",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "va-green",
        style: "mapbox://styles/mapbox/light-v10",
        center: [-123.12, 49.26],
        zoom: 11
      });
      self.map.on("load", function() {
        self.map.addLayer({
          id: "va-evChargers",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.7r7kiq6w"
          },
          "source-layer": "EV_VA-dcdl6k"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "va-bikes",
          type: "line",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.6mbilic6"
          },
          "source-layer": "bikeways_VA-6nwf0n"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "va-parks",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.490xk5j6"
          },
          "source-layer": "Parks_VA-b1d8hw"
        });
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
#va-green {
  width: 100%;
  height: 600px;
}
</style>
