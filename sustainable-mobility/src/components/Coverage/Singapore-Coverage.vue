<template>
  <div fill-height color="#F3EBE3">
    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="sing-coverage">Map</div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text>
            <h2 class="display-2 font-weight-bold">Coverage</h2>
            <div class="py-5"></div>

            <span
              >There transport coverage over the Singapore island is generally
            high, and there are also multiple transportation centers, which is
            kind of similar with Zurich. The high coverage of public
            transportation also results from the high population densities in
            this city-state, which is also a common feature in many Asian
            countries.</span
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
                  <div class="label">10</div>
                </div>
              </v-col>
            </v-row>
            <div class="py-3"></div>

            <span
              >Note: the coverage levels of all the three cities are reclassified from kernel densities 
              using same intervals. Area unit of the density is based on the linear unit of the spatial 
              reference WGS84.</span
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
  name: "SingaporeCoverage",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "sing-coverage",
        style: "mapbox://styles/mapbox/light-v10",
        center: [103.82, 1.35],
        zoom: 10.5,
        maxZoom: 16,
        minZoom: 10.5
      });

      //add hover id
      var hoveredCountryId = null;
      self.map.on("style.load", function() {
        self.map.addSource("sing-coverage", {
          type: "vector",
          url: "mapbox://mmcartog01.dtsb8207",
          "source-layer": "singkd-6wtp1d",
          generateId: true
        });
        self.map.addLayer({
          id: "sing-coverageLayer",
          type: "fill",
          source: "sing-coverage",
          "source-layer": "singkd-6wtp1d",
          paint: {
            "fill-color":[
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

      self.map.on('mousemove', 'sing-coverageLayer', function(e) {

        /* highlight the hovered feature */
         if (e.features.length > 0) {
          if (e.features[0].id != hoveredCountryId) {
            self.map.setFeatureState(
              {
                source: "sing-coverage",
                sourceLayer: "singkd-6wtp1d",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "sing-coverage",
              sourceLayer: "singkd-6wtp1d",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }

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
        
        self.map.on('mouseleave', 'sing-coverageLayer', function() {
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
#sing-coverage {
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
