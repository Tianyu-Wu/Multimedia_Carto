<template>
  <div fill-height color="#F3EBE3">
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Zurich - Europe</h2>
      <div class="py-5"></div>
    </v-container>

    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="zuri-coverage">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text class="display-2 font-weight-bold">Coverage</v-card-text>
          <div class="py-5"></div>

          <v-card-text
            >The public transport in Zurich covers almost every place of the
            city with a similar density. The kernel density of stations in the
            downtown is slightly higher than the remaining area, and There are
            multiple transport centers in Zurich.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "ZurichCoverage",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "zuri-coverage",
        style: "mapbox://styles/mmcartog01/ck9tms1dv0mtl1ipiy8fkgxsa",
        center: [8.551, 47.378],
        zoom: 11.0
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
#zuri-coverage {
  width: 100%;
  height: 600px;
}
</style>
