<template>
  <div fill-height color="#F3EBE3">
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Singapore - Asia</h2>
      <div class="py-5"></div>
    </v-container>

    <v-row fluid no-gutters align="center">
      <v-col cols="12" md="8">
        <div id="sg-green">
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
//import images for icons
import evCharger from "@/assets/evCharger.png";
import park from "@/assets/park.png";
import skyGreen from "@/assets/skygreen.png";

export default {
  name: "SingaporeGreen",
  data: () => ({
    map: null
  }),
  methods: {
    initMap: function() {
      let self = this;
      self.map = new mapboxgl.Map({
        container: "sg-green",
        style: "mapbox://styles/mapbox/light-v10",
        center: [103.82, 1.35],
        zoom: 10.5
      });
      /* Image: An image is loaded and added to the map. */
      self.map.loadImage(park, function(error, image) {
        if (error) throw error;
        self.map.addImage("parks_1", image);
      });
      /* Image: An image is loaded and added to the map. */
      self.map.loadImage(evCharger, function(error, image) {
        if (error) throw error;
        self.map.addImage("evCharger_1", image);
      });
      /* Image: An image is loaded and added to the map. */
      self.map.loadImage(skyGreen, function(error, image) {
        if (error) throw error;
        self.map.addImage("skyGreen_1", image);
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "evChargers",
          type: "symbol",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.2civtuef"
          },
          layout: {
            "icon-image": "evCharger_1",
            "icon-allow-overlap": true
          },
          "source-layer": "EV_SG-92ckmd"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "Bikes trails",
          type: "line",
          color: "#d8b365",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.59f7vld7"
          },
          "source-layer": "BikesTrails_SG_WGS84-5l2pnc"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "Parks",
          type: "symbol",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.9w2305dg"
          },
          layout: {
            "icon-image": "parks_1",
            "icon-allow-overlap": true
          },
          "source-layer": "Green_SG-b50ju0"
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "Sky green",
          type: "symbol",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.1u0gf4d6"
          },
          layout: {
            "icon-image": "skyGreen_1",
            "icon-allow-overlap": true
          },
          "source-layer": "SkyGreen_SG_WGS84-3fzuwg"
        });
      });
      var toggleableLayerIds = [
        "Parks",
        "Bikes trails",
        "evChargers",
        "Sky green"
      ];

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
  background-color: #1a9641;
  color: #ffffff;
}

#menu a.active:hover {
  background: #a6d96a;
}
#sg-green {
  width: 100%;
  height: 600px;
}
</style>
