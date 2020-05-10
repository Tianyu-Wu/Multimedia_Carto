<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="sing-coverage">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text class="display-2 font-weight-bold">Coverage</v-card-text>
          <div class="py-5"></div>

          <v-card-text>
            There transport coverage over the Singapore island is generally
            high, and there are also multiple transportation centers, which is
            kind of similar with Zurich. The high coverage of public
            transportation also results from the high population densities in
            this city-state, which is also a common feature in many Asian
            countries.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "SingaporeCoverage",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "sing-coverage",
        style: "mapbox://styles/mmcartog01/ck9tms1dv0mtl1ipiy8fkgxsa",
        center: [103.82, 1.35],
        zoom: 10.5
      });

      self.map.on("render", () => {
        self.map.resize();
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
#sing-coverage {
  width: 100%;
  height: 600px;
}
</style>
