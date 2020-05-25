<template>
  <v-card flat>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="3">
        <v-card-text
          class="display-2"
          :class="textcolor"
        >Transport-related carbon emission per capita</v-card-text>
        <v-card-text class="subtitle-1" :class="textcolor">
          This map displays the transport-related carbon emission per capita. It
          can be seen that the GHG per capita in developed countries is generally higher than what it is in developing countries. However, it is
          interesting that GHG per capita in North America is significantly higher
          than Europe, despite that both are developed regions.
          <div class="py-5"></div>

          <h2
            class="font-weight-regular"
            :class="textcolor"
          >Green House Gas Emissions per Capita (tons)</h2>
          <v-row>
            <v-col>
              <div class="legend-row legend-bar-ghg center"></div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="legend-row labels d-flex justify-space-between">
                <div class="label">0</div>
                <div class="label">9.622</div>
              </div>
            </v-col>
          </v-row>
          <div class="py-3"></div>
          <span :class="textcolor">Note: the countries in black do not have available data.</span>
        </v-card-text>
      </v-col>
      <v-col cols="8">
        <v-card-text>
          <div id="map_GHG">Map Loading</div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapboxgl } from "@/main";
// import mapboxgl from "mapbox-gl";

export default {
  name: "CurrentStatus",
  data: () => ({
    map: null
  }),
  props: {
    color: String,
    textcolor: {
      type: String,
      default: null
    }
  },
  methods: {
    initMap: function() {
      /* mapboxgl.accessToken =
        "pk.eyJ1IjoibW1jYXJ0b2cwMSIsImEiOiJjazk2bHZlbW8wOW5xM250Y2ZkbXNnZGdjIn0.QS71DsIq1oSDNUgEmfA3kg"; */
      let self = this;
      self.map = new mapboxgl.Map({
        container: "map_GHG",
        //style: "mapbox://styles/mmcartog01/ck9wvlx900sdg1ipcb5t5nd0g",
        style: "mapbox://styles/mapbox/light-v10",
        center: [14.88, 46.861],
        zoom: 2,
        maxZoom: 5,
        minZoom: 2
      });

      //add hover id
      //var hoveredCountryId = null;
      self.map.on("load", function() {
        self.map.addSource("map_GHG", {
          type: "vector",
          url: "mapbox://mmcartog01.4nkjdjdi",
          "source-layer": "globalMobility_js-a0sots",
          generateId: true
        });
        self.map.addLayer({
          id: "GHG",
          type: "fill",
          layout: {
            visibility: "visible"
          },
          source: "map_GHG",
          "source-layer": "globalMobility_js-a0sots",
          paint: {
            "fill-color": [
              "interpolate",
              ["exponential", 0.75],
              ["get", "GHGperCa_2"],
              0,
              "hsl(72, 62%, 53%)",
              9.622,
              "hsl(0, 99%, 48%)"
            ],
            "fill-outline-color": "#800026",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              0.9,
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
        /* TBD, highlight the hovered feature */

        // Change the cursor style as a UI indicator.
        self.map.getCanvas().style.cursor = "pointer";

        // var coordinates = e.features[0].geometry.coordinates.slice();
        var country = e.features[0].properties.CNTRY_NAME;
        var popvalue = e.features[0].properties.GHGperCa_2;

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
.legend-row {
  width: 90%;
  height: 12px;
}
/* TBD, how to change the color bar per to the map */
.legend-bar-ghg {
  height: 10px;
  width: 100%;
  background: linear-gradient(to right, #b4d13d, #f40101);
}
</style>
