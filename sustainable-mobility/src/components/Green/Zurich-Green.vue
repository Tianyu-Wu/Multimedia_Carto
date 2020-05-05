<template>
  <div fill-height color="#F3EBE3">
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Zurich - Europe</h2>
      <div class="py-5"></div>
    </v-container>

    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="zh-green">Map</div>
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
  name: "ZurichGreen",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "zh-green",
        style: "mapbox://styles/mapbox/light-v10",
        center: [8.534128, 47.389032],
        zoom: 11.5
      });
      self.map.on("load", function() {
        self.map.addLayer({
          id: "zh-evChargers",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.14lqh0ef"
          },
          "source-layer": "EV_ZH-47iw08"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "zh-bikes",
          type: "line",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.axgin0r4"
          },
          "source-layer": "BikesTrails_ZH-0ue0zi"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "zh-parks",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.2sos3ike"
          },
          "source-layer": "Parks_ZH-dxjvdc"
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
#zh-green {
  width: 100%;
  height: 600px;
}
</style>
