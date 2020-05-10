<template>
  <div fill-height color="#F3EBE3">
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Zurich - Europe</h2>
      <div class="py-5"></div>
    </v-container>

    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="zh-green">
          Map
          <nav id="menu"></nav>
        </div>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="d-flex flex-column justify-center" shaped height="600">
          <v-card-text class="display-2 font-weight-bold"> Green</v-card-text>
          <div class="py-5"></div>

          <v-card-text>Some Stats Here.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapboxgl } from "@/main";

export default {
  name: "ZurichGreen",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "zh-green",
        style: "mapbox://styles/mapbox/light-v10",
        center: [8.534128, 47.389032],
        zoom: 11.5
      });
      self.map.on("load", function() {
        self.map.addLayer({
          id: "evChargers",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.14lqh0ef"
          },
          "source-layer": "EV_ZH-47iw08"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "Bikes trails",
          type: "line",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.axgin0r4"
          },
          "source-layer": "BikesTrails_ZH-0ue0zi"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "Parks",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.2sos3ike"
          },
          "source-layer": "Parks_ZH-dxjvdc"
        });
      });
      var toggleableLayerIds = ["Parks", "Bikes trails", "evChargers"];

      // set up the corresponding toggle button for each layer
      for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i];

        var link = document.createElement("a");
        link.href = "#";
        link.className = "active";
        link.textContent = id;

        link.onclick = function(e) {
          var clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          var visibility = self.map.getLayoutProperty(
            clickedLayer,
            "visibility"
          );

          // toggle layer visibility by changing the layout object's visibility property
          if (visibility === "visible") {
            self.map.setLayoutProperty(clickedLayer, "visibility", "none");
            this.className = "";
          } else {
            this.className = "active";
            self.map.setLayoutProperty(clickedLayer, "visibility", "visible");
          }
        };

        var layers = document.getElementById("menu");
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
#menu {
  background: #fff;
  position: relative;
  z-index: 1;
  top: 0px;
  right: 10px;
  border-radius: 3px;
  width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-family: "Open Sans", sans-serif;
}

#menu a {
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

#menu a:last-child {
  border: none;
}

#menu a:hover {
  background-color: #f8f8f8;
  color: #404040;
}

#menu a.active {
  background-color: #3887be;
  color: #ffffff;
}

#menu a.active:hover {
  background: #3074a4;
}
#zh-green {
  width: 100%;
  height: 600px;
}
</style>
