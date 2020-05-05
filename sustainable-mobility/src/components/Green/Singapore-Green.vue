<template>
  <div fill-height color="#F3EBE3">
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Singapore - Asia</h2>
      <div class="py-5"></div>
    </v-container>

    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="sg-green">Map</div>
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
  name: "SingaporeGreen",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "sg-green",
        style: "mapbox://styles/mapbox/light-v10",
        center: [1.367542, 103.794622],
        zoom: 11
      });
      self.map.on("load", function() {
        self.map.addLayer({
          id: "sg-evChargers",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.2civtuef"
          },
          "source-layer": "EV_SG-92ckmd"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "sg-bikes",
          type: "line",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.59f7vld7"
          },
          "source-layer": "BikesTrails_SG_WGS84-5l2pnc"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "sg-parks",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.9w2305dg"
          },
          "source-layer": "Green_SG-b50ju0"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "sg-skygreen",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.1u0gf4d6"
          },
          "source-layer": "SkyGreen_SG_WGS84-3fzuwg"
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
#sg-green {
  width: 100%;
  height: 600px;
}
</style>
