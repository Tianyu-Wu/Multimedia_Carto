<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="sin-frequency">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card flat class="d-flex flex-column justify-center" height="600">
          <v-card-text>
            <h2 class="display-2 font-weight-bold">Passenger Volume</h2>
            <div class="py-5"></div>

            <span>
              The passenger volume of Singapore is retrieved from the official
              Land Transport DataMall by Singapore government. The data is
              updated on a monthly basis.
            </span>
            <div class="py-3"></div>

            <span>
              Among the all three cities that we studied, Singapore shows the
              largest passenger volume with daily weekday boardings mostly over
              10000.
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
            <div class="py-3"></div>

            <span>
              Note: the black dots locates the stops without available
              passenger volume data.
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "SingaporeFrequency",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "sin-frequency",
        style: "mapbox://styles/mapbox/light-v10",
        // style: "mapbox://styles/mmcartog01/ck98marof00vr1io3vqd4ehlb/draft",
        center: [103.82, 1.35],
        zoom: 10.5,
        maxZoom: 16,
        minZoom: 10.5
      });

      self.map.on("style.load", function() {
        self.map.addSource("singapore-boarding", {
          type: "vector",
          url: "mapbox://mmcartog01.ak2nd7we",
          "source-layer": "singapore_boardings-d3ks0b",
          generateId: true
        });

        self.map.addLayer({
          id: "singapore-boarding-layer",
          type: "circle",
          source: "singapore-boarding",
          "source-layer": "singapore_boardings-d3ks0b",
          paint: {
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["get", "bus_stop_passenger_weekday_boardings"],
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
              ["get", "bus_stop_passenger_weekday_boardings"],
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
            "circle-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.8
            ],
            "circle-stroke-color": "#74e4e8",
            "circle-stroke-width": 2,
            "circle-stroke-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0
            ]
          }
        });
      });

      //add hover id
      var hoveredCountryId = null;

      // When the user moves their mouse over the layer, we'll update the
      // feature state for the feature under the mouse.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      self.map.on("mousemove", "singapore-boarding-layer", function(e) {
        /* highlight the hovered feature */
        if (e.features.length > 0) {
          if (e.features[0].id != hoveredCountryId) {
            self.map.setFeatureState(
              {
                source: "singapore-boarding",
                sourceLayer: "singapore_boardings-d3ks0b",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "singapore-boarding",
              sourceLayer: "singapore_boardings-d3ks0b",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }

        // Change the cursor style as a UI indicator.
        self.map.getCanvas().style.cursor = "pointer";

        // Get the pop up value
        var popvalue =
          e.features[0].properties.bus_stop_passenger_weekday_boardings;

        // Populate the popup and set its coordinates
        // based on the feature found.
        if (popvalue != null && popvalue != 0) {
          popup
            .setLngLat(e.lngLat)
            .setHTML("Weekday boarding: " + popvalue)
            .addTo(self.map);
        } else {
          popup
            .setLngLat(e.lngLat)
            .setHTML("Data not available")
            .addTo(self.map);
        }

        self.map.on("mouseleave", "singapore-boarding", function() {
          self.map.getCanvas().style.cursor = "";
          popup.remove();
        });
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

<style scoped>
#sin-frequency {
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
