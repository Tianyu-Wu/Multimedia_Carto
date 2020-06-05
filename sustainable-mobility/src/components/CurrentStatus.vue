<template>
  <v-card flat style="padding: 0px 50px 0px 50px">
    <v-row no-gutters justify="center" class="align-center">
      <v-col cols="12" lg="4">
        <v-card-text class="display-2">Transport-related carbon emission per capita</v-card-text>
        <v-card-text class="subtitle-1">
          This map displays the transport-related carbon emission per capita. It
          can be seen that the GHG per capita in developed countries is
          generally higher than what it is in developing countries. However, it
          is interesting that GHG per capita in North America is significantly
          higher than in Europe, despite that both are developed regions.
          <div class="py-5"></div>

          <base-legend v-bind="legendBar" />
        </v-card-text>
      </v-col>
      <v-col cols="12" lg="8">
        <div id="map_GHG">Map Loading</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapboxgl } from "@/main";
import BaseLegend from "./Layouts/Legend";

export default {
  name: "CurrentStatus",
  components: {
    BaseLegend
  },
  data: () => ({
    map: null,
    legendBar: {
      heading: "Green House Gas Emissions per Capita (tons)",
      colors: ["#b4d13d", "#f40101"],
      labels: [0, 10]
    }
  }),

  methods: {
    initMap: function() {
      /* mapboxgl.accessToken =
        "pk.eyJ1IjoibW1jYXJ0b2cwMSIsImEiOiJjazk2bHZlbW8wOW5xM250Y2ZkbXNnZGdjIn0.QS71DsIq1oSDNUgEmfA3kg"; */
      let self = this;
      self.map = new mapboxgl.Map({
        container: "map_GHG",
        style: "mapbox://styles/mapbox/light-v10",
        center: [14.88, 46.861],
        zoom: 2,
        maxZoom: 5,
        minZoom: 2
      });

      //add hover id
      var hoveredCountryId = null;
      self.map.on("load", function() {
        self.map.addSource("map_GHG", {
          type: "vector",
          url: "mapbox://mmcartog01.26rz0kgv",
          "source-layer": "globalMobilityGHG-d80ps0",
          promoteId: "OBJECTID"
        });
        self.map.addLayer({
          id: "GHG",
          type: "fill",
          layout: {
            visibility: "visible"
          },
          source: "map_GHG",
          "source-layer": "globalMobilityGHG-d80ps0",
          paint: {
            "fill-color": [
              "interpolate",
              ["exponential", 0.75],
              ["get", "Value"],
              0.045,
              "hsl(72, 62%, 53%)",
              9.622,
              "hsl(0, 99%, 48%)"
            ],
            "fill-outline-color": "#800026",
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

      self.map.on("mousemove", "GHG", function(e) {
        /* highlight the hovered feature */
        if (e.features.length > 0) {
          if (e.features[0].id != hoveredCountryId) {
            self.map.setFeatureState(
              {
                source: "map_GHG",
                sourceLayer: "globalMobilityGHG-d80ps0",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "map_GHG",
              sourceLayer: "globalMobilityGHG-d80ps0",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }

        // Change the cursor style as a UI indicator.
        self.map.getCanvas().style.cursor = "pointer";

        // var coordinates = e.features[0].geometry.coordinates.slice();
        var country = e.features[0].properties.CNTRY_NAME;
        var popvalue = e.features[0].properties.Value;

        // Populate the popup and set its coordinates
        // based on the feature found.
        if (popvalue != null && popvalue != 0) {
          popup
            .setLngLat(e.lngLat)
            .setHTML(country + ": " + popvalue + " tons per capita")
            .addTo(self.map);
        } else {
          popup
            .setLngLat(e.lngLat)
            .setHTML(country + ": data not available")
            .addTo(self.map);
        }

        self.map.on("mouseleave", "GHG", function() {
          self.map.getCanvas().style.cursor = "";
          popup.remove();
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
#map_GHG {
  width: 100%;
  height: 600px;
}
</style>
