<template>
  <div fill-height color="#F3EBE3">
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Vancouver - North America</h2>
      <div class="py-5"></div>
    </v-container>

    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="van-frequency">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text class="display-2 font-weight-bold"
            >Frequency</v-card-text
          >
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
  name: "VancouverFrequency",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "van-frequency",
        style: "mapbox://styles/mmcartog01/ck98marof00vr1io3vqd4ehlb/draft",
        center: [-122.949603, 49.224873],
        zoom: 9.5
      });

      // self.map.on("load", function() {
      //   self.map.addLayer({
      //     id: "vancouver-boarding",
      //     type: "circle",
      //     source: {
      //       type: "vector",
      //       url: "mapbox://mmcartog01.0tmwze2x"
      //     },
      //     "source-layer": "vancouver_boarding-dyq3tk"
      //   });
      // });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
#van-frequency {
  width: 100%;
  height: 600px;
}
</style>
