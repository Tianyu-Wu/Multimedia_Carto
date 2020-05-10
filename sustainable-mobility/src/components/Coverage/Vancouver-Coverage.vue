<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="van-coverage">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text class="display-2 font-weight-bold">Coverage</v-card-text>
          <div class="py-5"></div>

          <v-card-text>
            The transport coverage in the downtown of Vancouver is
            significantly higher than the remaining area, whereas the the
            density of stations in the other places are relatively low. This
            also imply that private cars seem more pupular there given the low
            coverage of public transpot.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "VancouverCoverage",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "van-coverage",
        style: "mapbox://styles/mmcartog01/ck9tms1dv0mtl1ipiy8fkgxsa",
        center: [-123.12, 49.26],
        zoom: 11
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
#van-coverage {
  width: 100%;
  height: 600px;
}
</style>
