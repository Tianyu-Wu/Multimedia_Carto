<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="zuri-coverage">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text>
            <h2 class="display-2 font-weight-bold">Coverage</h2>
            <div class="py-5"></div>

            <span
              >The public transport in Zurich covers almost every place of the city
            with similar levels. The coverage of public transport in the
            downtown is slightly higher than the remaining area, and there are
            multiple transport centers in Zurich.</span
            >
            
            <div class="py-5"></div>

            <h2 class="font-weight-regular">Transport Coverage Levels</h2>
            <v-row>
              <v-col>
                <div class="legend-row legend-color center"></div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="legend-row labels d-flex justify-space-between">
                  <div class="label">1</div>
                  <div class="label">14</div>
                </div>
              </v-col>
            </v-row>
            <div class="py-3"></div>

            <span
              >Note: the levels are reclassified from the kernel density of public transport 
              stations, and the area unit of density is based on the linear unit of the spatial 
              reference WGS84</span
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "ZurichCoverage",
  data: () => ({
    map: null
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

      self.map.on("style.load", function() {
        self.map.addLayer({
          id: "zuri-coverageLayer",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.1ivwr4hh"
          },
          "source-layer": "zuri_js-9tharc",
          paint: {
            "fill-color":[
              "interpolate",
              ["exponential", 0.9],
              ["get", "GRIDCODE"],
              1,
              "hsl(199, 33%, 79%)",
              14,
              "hsl(203, 93%, 34%)"
            ],
            "fill-outline-color": "#788186",
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

      self.map.on('mousemove', 'zuri-coverageLayer', function(e) {

        /* TBD, highlight the hovered feature */

        // Change the cursor style as a UI indicator.
        self.map.getCanvas().style.cursor = 'pointer';
        
        // Get the pop up value
        var popvalue = e.features[0].properties.GRIDCODE;
        
        // Populate the popup and set its coordinates
        // based on the feature found.
        if(popvalue != null && popvalue != 0){
          popup
          .setLngLat(e.lngLat)
          .setHTML("Coverage level: " + popvalue)
          .addTo(self.map);
        }else{
          popup
          .setLngLat(e.lngLat)
          .setHTML("Data not available")
          .addTo(self.map);
        }
        
        self.map.on('mouseleave', 'zuri-coverageLayer', function() {
          self.map.getCanvas().style.cursor = '';
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

<style>
#zuri-coverage {
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
    #b8d0db,
    #066aa7
  );
}
</style>
