<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" lg="8">
        <div id="van-coverage">Map</div>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card flat class="d-flex flex-column justify-center" height="600">
          <v-card-text>
            <h2 class="display-2 font-weight-bold">Coverage</h2>
            <div class="py-5"></div>

            <span>
              The transport coverage in the downtown of Vancouver is
              significantly higher than the remaining area, where the transport
              coverage is relatively low. This also implies that private cars
              seem more pupular there given the low coverage of public
              transport.
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
  name: "VancouverCoverage",
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
        container: "van-coverage",
        style: "mapbox://styles/mapbox/light-v10",
        center: [-123.12, 49.26],
        zoom: 11,
        maxZoom: 16,
        minZoom: 10.5
      });

      //add hover id
      var hoveredCountryId = null;
      self.map.on("style.load", function() {
        self.map.addSource("van-coverage", {
          type: "vector",
          url: "mapbox://mmcartog01.3eke1zqq",
          "source-layer": "vankd-50nbi7",
          promoteId: "ID"
        });
        self.map.addLayer({
          id: "van-coverageLayer",
          type: "fill",
          source: "van-coverage",
          "source-layer": "vankd-50nbi7",
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

      self.map.on("mousemove", "van-coverageLayer", function(e) {
        /* highlight the hovered feature */
        if (e.features.length > 0) {
          if (e.features[0].id != hoveredCountryId) {
            self.map.setFeatureState(
              {
                source: "van-coverage",
                sourceLayer: "vankd-50nbi7",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "van-coverage",
              sourceLayer: "vankd-50nbi7",
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

        self.map.on("mouseleave", "van-coverageLayer", function() {
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
#van-coverage {
  width: 100%;
  height: 600px;
}
</style>
