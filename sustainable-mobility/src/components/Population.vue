<template>
  <v-container fill-height align="center">
    <div class="py-12"></div>
    <h2 class="display-3 font-weight-bold mb-3">Urban Population</h2>
    <div class="py-5"></div>
    <v-row cols="12">
      <v-col cols="1">
        <nav id="menuPop"></nav>
      </v-col>

      <v-col cols="8">
        <div id="population" class="map pad2">Map</div>
      </v-col>
      <v-col cols="3">
        <v-card-text class="display-2 font-weight-bold"
          >Urban population through the years</v-card-text
        >
        <v-card-text>
          In the last few decades there has been a tendency to move from rural
          areas all around the world.
          <br />
          <br />This map shows this change through the percentage of urban
          population.
          <div class="py-5"></div>

          <h2 class="font-weight-regular">
            Percentage of Urban Population (%)
          </h2>
          <v-row>
            <v-col>
              <div class="legend-row legend-bar center"></div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="legend-row labels d-flex justify-space-between">
                <div class="label">0</div>
                <div class="label">25</div>
                <div class="label">50</div>
                <div class="label">75</div>
                <div class="label">100</div>
              </div>
            </v-col>
          </v-row>
          <div class="py-3"></div>
          <span>Note: the countries in black do not have available data.</span>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "Population",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibW1jYXJ0b2cwMSIsImEiOiJjazk2bHZlbW8wOW5xM250Y2ZkbXNnZGdjIn0.QS71DsIq1oSDNUgEmfA3kg";

      let self = this;
      self.map = new mapboxgl.Map({
        container: "population",
        style: "mapbox://styles/mapbox/light-v10",
        center: [0, 0],
        zoom: 2,
        maxZoom: 4,
        minZoom: 1
      });
      var hoveredCountryId = null;
      self.map.on("load", function() {
        self.map.addSource("population", {
          type: "vector",
          url: "mapbox://mmcartog01.bheykam9",
          "source-layer": "urbanPopPercentage-3dmf08",
          generateId: true
        });
        self.map.addLayer({
          id: "1960",
          type: "fill",
          layout: {
            visibility: "none"
          },
          source: "population",
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "y_1960"],
              2.077,
              "#ffffcc",
              14.32,
              "#ffffcc",
              26.56,
              "#fed976",
              38.8,
              "#feb24c",
              51.04,
              "#fd8d3c",
              60.52,
              "#fc4e2a",
              70,
              "#e31a1c",
              80,
              "#bd0026",
              90,
              "#800026"
            ],
            "fill-outline-color": "#800026",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.7
            ]
          }
        });
        self.map.addLayer({
          id: "1970",
          type: "fill",
          layout: {
            visibility: "none"
          },
          source: "population",
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "y_1970"],
              2.077,
              "#ffffcc",
              14.32,
              "#ffffcc",
              26.56,
              "#fed976",
              38.8,
              "#feb24c",
              51.04,
              "#fd8d3c",
              60.52,
              "#fc4e2a",
              70,
              "#e31a1c",
              80,
              "#bd0026",
              90,
              "#800026"
            ],
            "fill-outline-color": "#800026",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.7
            ]
          }
        });
        self.map.addLayer({
          id: "1980",
          type: "fill",
          layout: {
            visibility: "none"
          },
          source: "population",
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "y_1980"],
              2.077,
              "#ffffcc",
              14.32,
              "#ffffcc",
              26.56,
              "#fed976",
              38.8,
              "#feb24c",
              51.04,
              "#fd8d3c",
              60.52,
              "#fc4e2a",
              70,
              "#e31a1c",
              80,
              "#bd0026",
              90,
              "#800026"
            ],
            "fill-outline-color": "#800026",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.7
            ]
          }
        });
        self.map.addLayer({
          id: "1990",
          type: "fill",
          layout: {
            visibility: "none"
          },
          source: "population",
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "y_1990"],
              2.077,
              "#ffffcc",
              14.32,
              "#ffffcc",
              26.56,
              "#fed976",
              38.8,
              "#feb24c",
              51.04,
              "#fd8d3c",
              60.52,
              "#fc4e2a",
              70,
              "#e31a1c",
              80,
              "#bd0026",
              90,
              "#800026"
            ],
            "fill-outline-color": "#800026",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.7
            ]
          }
        });
        self.map.addLayer({
          id: "2000",
          type: "fill",
          layout: {
            visibility: "none"
          },
          source: "population",
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "y_2000"],
              2.077,
              "#ffffcc",
              14.32,
              "#ffffcc",
              26.56,
              "#fed976",
              38.8,
              "#feb24c",
              51.04,
              "#fd8d3c",
              60.52,
              "#fc4e2a",
              70,
              "#e31a1c",
              80,
              "#bd0026",
              90,
              "#800026"
            ],
            "fill-outline-color": "#800026",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.7
            ]
          }
        });
        self.map.addLayer({
          id: "2005",
          type: "fill",
          layout: {
            visibility: "none"
          },
          source: "population",
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "y_2005"],
              2.077,
              "#ffffcc",
              14.32,
              "#ffffcc",
              26.56,
              "#fed976",
              38.8,
              "#feb24c",
              51.04,
              "#fd8d3c",
              60.52,
              "#fc4e2a",
              70,
              "#e31a1c",
              80,
              "#bd0026",
              90,
              "#800026"
            ],
            "fill-outline-color": "#800026",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.7
            ]
          }
        });
        self.map.addLayer({
          id: "2010",
          type: "fill",
          layout: {
            visibility: "none"
          },
          source: "population",
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "y_2010"],
              2.077,
              "#ffffcc",
              14.32,
              "#ffffcc",
              26.56,
              "#fed976",
              38.8,
              "#feb24c",
              51.04,
              "#fd8d3c",
              60.52,
              "#fc4e2a",
              70,
              "#e31a1c",
              80,
              "#bd0026",
              90,
              "#800026"
            ],
            "fill-outline-color": "#800026",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.7
            ]
          }
        });
        self.map.addLayer({
          id: "2015",
          type: "fill",
          source: "population",
          layout: {
            visibility: "visible"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "y_2015"],

              2.077,
              "#ffffcc",
              14.32,
              "#ffffcc",
              26.56,
              "#fed976",
              38.8,
              "#feb24c",
              51.04,
              "#fd8d3c",
              60.52,
              "#fc4e2a",
              70,
              "#e31a1c",
              80,
              "#bd0026",
              90,
              "#800026"
            ],
            "fill-outline-color": "#800026",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.7
            ]
          }
        });
      });

      // When the user moves their mouse over the 1960layer, we'll update the
      // feature state for the feature under the mouse.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      self.map.on("mousemove", "1960", function(e) {
        if (e.features.length > 0) {
          if (id) {
            self.map.setFeatureState(
              {
                source: "population",
                sourceLayer: "urbanPopPercentage-3dmf08",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "population",
              sourceLayer: "urbanPopPercentage-3dmf08",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
        var country = e.features[0].properties.COUNTRY;
        var popvalue = e.features[0].properties.y_1960;
        popup
          .setLngLat(e.lngLat)
          .setHTML(country + " (" + popvalue + "%)")
          .addTo(self.map);
      });
      self.map.on("mousemove", "1970", function(e) {
        if (e.features.length > 0) {
          if (id) {
            self.map.setFeatureState(
              {
                source: "population",
                sourceLayer: "urbanPopPercentage-3dmf08",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "population",
              sourceLayer: "urbanPopPercentage-3dmf08",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
        var country = e.features[0].properties.COUNTRY;
        var popvalue = e.features[0].properties.y_1970;
        popup
          .setLngLat(e.lngLat)
          .setHTML(country + " (" + popvalue + "%)")
          .addTo(self.map);
      });
      self.map.on("mousemove", "1980", function(e) {
        if (e.features.length > 0) {
          if (id) {
            self.map.setFeatureState(
              {
                source: "population",
                sourceLayer: "urbanPopPercentage-3dmf08",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "population",
              sourceLayer: "urbanPopPercentage-3dmf08",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
        var country = e.features[0].properties.COUNTRY;
        var popvalue = e.features[0].properties.y_1980;
        popup
          .setLngLat(e.lngLat)
          .setHTML(country + " (" + popvalue + "%)")
          .addTo(self.map);
      });
      self.map.on("mousemove", "1990", function(e) {
        if (e.features.length > 0) {
          if (id) {
            self.map.setFeatureState(
              {
                source: "population",
                sourceLayer: "urbanPopPercentage-3dmf08",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "population",
              sourceLayer: "urbanPopPercentage-3dmf08",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
        var country = e.features[0].properties.COUNTRY;
        var popvalue = e.features[0].properties.y_1990;
        popup
          .setLngLat(e.lngLat)
          .setHTML(country + " (" + popvalue + "%)")
          .addTo(self.map);
      });
      self.map.on("mousemove", "2000", function(e) {
        if (e.features.length > 0) {
          if (id) {
            self.map.setFeatureState(
              {
                source: "population",
                sourceLayer: "urbanPopPercentage-3dmf08",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "population",
              sourceLayer: "urbanPopPercentage-3dmf08",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
        var country = e.features[0].properties.COUNTRY;
        var popvalue = e.features[0].properties.y_2000;
        popup
          .setLngLat(e.lngLat)
          .setHTML(country + " (" + popvalue + "%)")
          .addTo(self.map);
      });
      self.map.on("mousemove", "2005", function(e) {
        if (e.features.length > 0) {
          if (id) {
            self.map.setFeatureState(
              {
                source: "population",
                sourceLayer: "urbanPopPercentage-3dmf08",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "population",
              sourceLayer: "urbanPopPercentage-3dmf08",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
        var country = e.features[0].properties.COUNTRY;
        var popvalue = e.features[0].properties.y_2005;
        popup
          .setLngLat(e.lngLat)
          .setHTML(country + " (" + popvalue + "%)")
          .addTo(self.map);
      });
      self.map.on("mousemove", "2010", function(e) {
        if (e.features.length > 0) {
          if (id) {
            self.map.setFeatureState(
              {
                source: "population",
                sourceLayer: "urbanPopPercentage-3dmf08",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "population",
              sourceLayer: "urbanPopPercentage-3dmf08",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
        var country = e.features[0].properties.COUNTRY;
        var popvalue = e.features[0].properties.y_2010;
        popup
          .setLngLat(e.lngLat)
          .setHTML(country + " (" + popvalue + "%)")
          .addTo(self.map);
      });
      self.map.on("mousemove", "2015", function(e) {
        if (e.features.length > 0) {
          if (id) {
            self.map.setFeatureState(
              {
                source: "population",
                sourceLayer: "urbanPopPercentage-3dmf08",
                id: hoveredCountryId
              },
              { hover: false }
            );
          }
          hoveredCountryId = e.features[0].id;
          self.map.setFeatureState(
            {
              source: "population",
              sourceLayer: "urbanPopPercentage-3dmf08",
              id: hoveredCountryId
            },
            { hover: true }
          );
        }
        var country = e.features[0].properties.COUNTRY;
        var popvalue = e.features[0].properties.y_2015;
        popup
          .setLngLat(e.lngLat)
          .setHTML(country + " (" + popvalue + "%)")
          .addTo(self.map);
      });
      // When the mouse leaves the 1960 layer, update the feature state of the
      // previously hovered feature.
      self.map.on("mouseleave", function() {
        if (hoveredCountryId) {
          self.map.setFeatureState(
            {
              source: "population",
              sourceLayer: "urbanPopPercentage-3dmf08",
              id: hoveredCountryId
            },
            { hover: false }
          );
        }
        hoveredCountryId = null;
        popup.remove();
      });

      var toggleablePopIds = [
        "2015",
        "2010",
        "2005",
        "2000",
        "1990",
        "1980",
        "1970",
        "1960"
      
      ];

      // set up the corresponding toggle button for each layer
      for (var i = 0; i < toggleablePopIds.length; i++) {
        var id = toggleablePopIds[i];

        var link = document.createElement("a");
        link.href = "#";
        link.className = "";
        link.textContent = id;

        link.onclick = function(e) {
          var clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          for (var j = 0; j < toggleablePopIds.length; j++) {
            
            if (clickedLayer === toggleablePopIds[j]) {
              layers.children[j].className = "active";
              self.map.setLayoutProperty(
                toggleablePopIds[j],
                "visibility",
                "visible"
              );
            } else {
              layers.children[j].className = "";
              self.map.setLayoutProperty(
                toggleablePopIds[j],
                "visibility",
                "none"
              );
            }
          }
        };

        var layers = document.getElementById("menuPop");
        layers.appendChild(link);
      }
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>

.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
}
#menuPop {
  background: #fff;
  position: relative;
  z-index: 1;
  top: 0px;
  right: 10px;
  border-radius: 3px;
  width: 80px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-family: "Open Sans", sans-serif;
}

#menuPop a {
  font-size: 13px;
  color: #404040;
  display: block;
  margin: 0;
  padding: 0;
  padding: 10px;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  text-align: center;
}

#menuPop a:last-child {
  border: none;
}

#menuPop a:hover {
  background-color: #f8f8f8;
  color: #404040;
}

#menuPop a.active {
  background-color: #800026;
  color: #ffffff;
}

#menuPop a.active:hover {
  background: #e31a1c;
}

.legend-row {
  width: 90%;
  height: 12px;
}
.legend-bar {
  height: 10px;
  width: 100%;
  background: linear-gradient(
    to right,
    #ffffcc,
    #ffffcc,
    #fed976,
    #feb24c,
    #fd8d3c,
    #fc4e2a,
    #e31a1c,
    #bd0026,
    #800026
  );
}
#population {
  width: 100%;
  height: 700px;
}

</style>
