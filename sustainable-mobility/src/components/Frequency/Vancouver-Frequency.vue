<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" lg="8">
        <div id="van-frequency">Map</div>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card flat class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text>
            <h2 class="display-2 font-weight-bold">Passenger Volume</h2>
            <div class="py-5"></div>

            <span>
              The passenger volume of Vancouver bus stops is derived from the
              Transit Service Performance Review (TSPR) program of Translink
              (i.e. the public transportation operator of British Columbia) in
              2018.
            </span>
            <div class="py-3"></div>

            <span>
              Compared to the other two cities, the passenger volume of
              Vancouver is relatively small, mostly smaller than 2500. A
              relatively distributed pattern can be recognized from the map.
              This map well demonstrates the typical mobility style in North
              America countries with low road density.
            </span>
            <div class="py-5"></div>

            <base-legend v-bind="legendBar"></base-legend>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";
import BaseLegend from "../Layouts/Legend";

export default {
  name: "VancouverFrequency",
  components: {
    BaseLegend
  },
  data: () => ({
    map: null,
    legendBar: {
      heading: "Average Weekday Boarding",
      colors: ["#8ab9d6", " #fed56c", "#f09f66", "#f2683a", "#f75555"],
      labels: ["0", "2500", "5000", "7500", "10000+"]
    }
  }),
  methods: {
    initMap: function() {
      // store the ref to this
      let self = this;

      // create a new mapbox object, rendered in map div
      self.map = new mapboxgl.Map({
        container: "van-frequency",
        style: "mapbox://styles/mapbox/light-v10",
        center: [-123.12, 49.26],
        zoom: 11,
        maxZoom: 16,
        minZoom: 10.5
      });

      self.map.on("render", () => {
        self.map.resize();
      });
      // add the vancouver boarding souce layer
      self.map.on("style.load", function() {
        self.map.addSource("vancouver-boarding", {
          type: "vector",
          url: "mapbox://mmcartog01.bzx41qvn",
          promoteId: "stop_id"
        });

        // add the vancouver boarding layer from source, and render the style
        self.map.addLayer({
          id: "vancouver-boarding-layer",
          type: "circle",
          source: "vancouver-boarding",
          "source-layer": "vancouver_boarding_clip-6ak42g",
          filter: ["all", [">=", ["get", "avg_daily_boarding_mf"], 0]],
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
      var hoveredId = null;

      // When the user moves their mouse over the layer, we'll update the
      // feature state for the feature under the mouse.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      self.map.on("mousemove", "vancouver-boarding-layer", function(e) {
        /* highlight the hovered feature */
        if (e.features.length > 0) {
          // Change the cursor style as a UI indicator.
          self.map.getCanvas().style.cursor = "pointer";

          // Get the pop up value
          var popvalue = e.features[0].properties.avg_daily_boarding_mf;

          // Populate the popup and set its coordinates
          // based on the feature found.
          if (popvalue > 0) {
            popup
              .setLngLat(e.lngLat)
              .setHTML("Weekday boarding: " + popvalue)
              .addTo(self.map);
          } else {
            popup
              .setLngLat(e.lngLat)
              .setHTML("Weekday boarding: less than 5")
              .addTo(self.map);
          }

          // if another feature is already hovered, reset the hovering state of that feature
          if (hoveredId) {
            self.map.removeFeatureState({
              source: "vancouver-boarding",
              sourceLayer: "vancouver_boarding_clip-6ak42g",
              id: hoveredId
            });
          }

          // set the hover id to the currently hovered feature
          hoveredId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "vancouver-boarding",
              sourceLayer: "vancouver_boarding_clip-6ak42g",
              id: hoveredId
            },
            { hover: true }
          );
        }
      });

      // when the mouse leaves the layer, reset the hovering state
      self.map.on("mouseleave", "vancouver-boarding-layer", function() {
        if (hoveredId) {
          self.map.setFeatureState(
            {
              source: "vancouver-boarding",
              sourceLayer: "vancouver_boarding_clip-6ak42g",
              id: hoveredId
            },
            { hover: false }
          );
        }
        hoveredId = null;
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
#van-frequency {
  width: 100%;
  height: 600px;
}
</style>
