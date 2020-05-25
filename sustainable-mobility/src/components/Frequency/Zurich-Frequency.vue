<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="zur-frequency">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card flat class="d-flex flex-column justify-center" height="600">
          <v-card-text>
            <h2 class="display-2 font-weight-bold">Passenger Volume</h2>
            <div class="py-5"></div>

            <span>
              The passenger volume of Zurich bus and tram stops are estimated
              with "Durchschnittlicher Werktagverkehr" (DWV)
            </span>
            <div class="py-3"></div>

            <span>
              As shown in the map, the stops with daily boardings over 10000
              generally locates at the central region. The passenger volume
              declines while spreading out to the border of the city of
              Zurich
            </span>
            <div class="py-5"></div>

            <h2 class="font-weight-regular">Average Weekday Boardings</h2>
            <v-row>
              <v-col>
                <div class="legend-row legend-color center"></div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="legend-row labels d-flex justify-space-between">
                  <div class="label">0</div>
                  <div class="label">2500</div>
                  <div class="label">5000</div>
                  <div class="label">7500</div>
                  <div class="label">10000+</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "ZurichFrequency",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "zur-frequency",
        style: "mapbox://styles/mapbox/light-v10",
        center: [8.551, 47.378],
        zoom: 11.5,
        maxZoom: 16,
        minZoom: 10.5
      });

      //   resize map
      self.map.on("render", () => {
        self.map.resize();
      });

      self.map.on("style.load", function() {
        self.map.addLayer({
          id: "zurich-boarding",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.88ja3p7l"
          },
          "source-layer": "zurich_boardings-ahzhbf",
          paint: {
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["get", "DWV_boardings"],
              0,
              3,
              5000,
              5,
              10000,
              10
            ],
            "circle-color": [
              "interpolate",
              ["linear"],
              ["get", "DWV_boardings"],
              0,
              "#8ab9d6",
              2500,
              "#fed56c",
              5000,
              "#f09f66",
              7500,
              "#f2683a",
              10000,
              "#f75555"
            ],
            "circle-opacity": 0.8
          }
        });
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style scoped>
#zur-frequency {
  width: 100%;
  height: 600px;
}

.legend-row {
  width: 90%;
  height: 12px;
}

.legend-color {
  background: linear-gradient(
    to right,
    #8ab9d6,
    #fed56c,
    #f09f66,
    #f2683a,
    #f75555
  );
}
</style>
