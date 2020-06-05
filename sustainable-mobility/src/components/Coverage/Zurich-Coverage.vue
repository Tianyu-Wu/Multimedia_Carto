<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="zuri-coverage">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card flat class="d-flex flex-column justify-center" height="600">
          <v-card-text>
            <h2 class="display-2 font-weight-bold">Coverage</h2>
            <div class="py-5"></div>

            <span>
              The public transport in Zurich covers almost every place of the
              city with similar levels. The coverage of public transport in the
              downtown is slightly higher than the remaining area, and there are
              multiple transport centers in Zurich.
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
  name: "ZurichCoverage",
  components: {
    BaseLegend
  },
  data: () => ({
    map: null,
    legendBar: {
      heading: "Transport Coverage Levels",
      colors: ["#b8d0db", "#066aa7"],
      labels: [1, 10],
      notes:
        "Note: the coverage levels of all the three cities are reclassified from kernel densities using same intervals. Area unit of the density is based on the linear unit of the spatial reference WGS84."
    }
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "zuri-coverage",
        style: "mapbox://styles/mapbox/light-v10",
        center: [8.551, 47.378],
        zoom: 11.5,
        maxZoom: 16,
        minZoom: 10.5
      });

      //add hover id
      var hoveredCountryId = null;
      self.map.on("style.load", function() {
        self.map.addSource("zuri-coverage", {
          type: "vector",
          url: "mapbox://mmcartog01.budj8s28",
          "source-layer": "zurikd-13pepo",
          promoteId: "ID"
        });
        self.map.addLayer({
          id: "zuri-coverageLayer",
          type: "fill",
          source: "zuri-coverage",
          "source-layer": "zurikd-13pepo",
          paint: {
            "fill-color": [
              "interpolate",
              ["exponential", 0.9],
              ["get", "GRIDCODE"],
              1,
              "hsl(199, 33%, 79%)",
              10,
              "hsl(203, 93%, 34%)"
            ],
            "fill-outline-color": "#788186",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.7
            ],
            "fill-antialias": true
          }
        });
      });

      // When the user moves their mouse over the 1960layer, we'll update the
      // feature state for the feature under the mouse.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      self.map.on("mousemove", "zuri-coverageLayer", function(e) {
        /* highlight the hovered feature */
        if (e.features.length > 0) {
          if (e.features[0].id != hoveredCountryId) {
            self.map.setFeatureState(
              {
                source: "zuri-coverage",
                sourceLayer: "zurikd-13pepo",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "zuri-coverage",
              sourceLayer: "zurikd-13pepo",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
        // Change the cursor style as a UI indicator.
        self.map.getCanvas().style.cursor = "pointer";

        // Get the pop up value
        var popvalue = e.features[0].properties.GRIDCODE;

        // Populate the popup and set its coordinates
        // based on the feature found.
        if (popvalue != null && popvalue != 0) {
          popup
            .setLngLat(e.lngLat)
            .setHTML("Coverage level: " + popvalue)
            .addTo(self.map);
        } else {
          popup
            .setLngLat(e.lngLat)
            .setHTML("Data not available")
            .addTo(self.map);
        }

        self.map.on("mouseleave", "zuri-coverageLayer", function() {
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
#zuri-coverage {
  width: 100%;
  height: 600px;
}
</style>
