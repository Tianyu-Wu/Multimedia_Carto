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
              with "Durchschnittlicher Werktagverkehr" (DWV).
            </span>
            <div class="py-3"></div>

            <span>
              As shown in the map, the stops with daily boarding over 10000
              generally locates at the central region. The passenger volume
              declines while spreading out to the border of the city of Zurich.
            </span>
            <div class="py-5"></div>

            <h2 class="font-weight-regular">Average Weekday Boarding</h2>
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
        self.map.addSource("zurich-boarding", {
          type: "vector",
          url: "mapbox://mmcartog01.88ja3p7l",
          "source-layer": "zurich_boardings-ahzhbf",
          promoteId: "Haltestellennummer"
        });

        self.map.addLayer({
          id: "zurich-boarding-layer",
          type: "circle",
          source: "zurich-boarding",
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

      self.map.on("mousemove", "zurich-boarding-layer", function(e) {
        /* highlight the hovered feature */
        if (e.features.length > 0) {
          // Change the cursor style as a UI indicator.
          self.map.getCanvas().style.cursor = "pointer";

          // Get the pop up value
          var popvalue = e.features[0].properties.DWV_boardings;

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

          if (hoveredCountryId) {
            self.map.removeFeatureState({
              source: "zurich-boarding",
              sourceLayer: "zurich_boardings-ahzhbf",
              id: hoveredCountryId
            });
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "zurich-boarding",
              sourceLayer: "zurich_boardings-ahzhbf",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
      });

      self.map.on("mouseleave", "zurich-boarding-layer", function() {
        if (hoveredCountryId) {
          self.map.setFeatureState(
            {
              source: "zurich-boarding",
              sourceLayer: "zurich_boardings-ahzhbf",
              id: hoveredCountryId
            },
            { hover: false }
          );
        }
        hoveredCountryId = null;
        self.map.getCanvas().style.cursor = "";
        popup.remove();
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
