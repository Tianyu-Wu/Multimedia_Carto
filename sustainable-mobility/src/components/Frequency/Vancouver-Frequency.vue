<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="van-frequency">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text>
            <h2 class="display-2 font-weight-bold">Passenger Volume</h2>
            <div class="py-5"></div>

            <span
              >The passenger volume of Vancouver bus stops is derived from the
              Transit Service Performance Review (TSPR) program of Translink
              (i.e. the public transportation operator of British Columbia) in
              2018</span
            >
            <div class="py-3"></div>

            <span
              >Compared to the other two cities, the passenger volume of
              Vancouver is relatively small, mostly smaller than 2500. A
              relatively distributed pattern can be recognized from the map.
              This map well demonstrates the typical mobility style in North
              America countries with low road density.</span
            >
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
  name: "VancouverFrequency",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "van-frequency",
        style: "mapbox://styles/mapbox/light-v10",
        // style: "mapbox://styles/mmcartog01/ck98marof00vr1io3vqd4ehlb/draft",
        center: [-123.12, 49.26],
        zoom: 11
      });

      self.map.on("render", () => {
        self.map.resize();
      });

      self.map.on("style.load", function() {
        self.map.addLayer({
          id: "vancouver-boarding",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bzx41qvn"
          },
          "source-layer": "vancouver_boarding_clip-6ak42g",
          paint: {
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["get", "avg_daily_boarding_mf"],
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
              ["get", "avg_daily_boarding_mf"],
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

<style>
#van-frequency {
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
