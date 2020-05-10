<template>
  <v-container fill-height align="center">
    <h2 class="display-2 font-weight-bold mb-3">POPULATION</h2>
    <v-row cols="12">
      <v-col cols="1" md="1">
        <nav id="menuPop"></nav>
      </v-col>

      <v-col cols="8" >
        <div id="population" class="map pad2">
          Map
          
        </div>
      </v-col>
      <v-col cols="3">
         <v-card-text class="display-2 font-weight-bold"> Urban population through the years</v-card-text>
         <v-card-text>
            In the last few decades there has been a tendency to move from rural areas all around the world.
            <br /><br />
            This map shows this change is shown through the percentage of urban population.
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
        zoom: 2
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "1960",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "visible"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "1960"],
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
            "fill-opacity": 0.86
          }
        });
      });
      self.map.on("load", function() {
        self.map.addLayer({
          id: "1970",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "1970"],
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
            "fill-opacity": 0.86
          }
        });
      });
      self.map.on("load", function() {
        self.map.addLayer({
          id: "1980",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "1980"],
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
            "fill-opacity": 0.86
          }
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "1990",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "1990"],
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
            "fill-opacity": 0.86
          }
        });
      });

            self.map.on("load", function() {
        self.map.addLayer({
          id: "2000",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2000"],
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
            "fill-opacity": 0.86
          }
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "2001",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2001"],
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
            "fill-opacity": 0.86
          }
        });
      });
      self.map.on("load", function() {
        self.map.addLayer({
          id: "2002",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2002"],
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
            "fill-opacity": 0.86
          }
        });
      });
            self.map.on("load", function() {
        self.map.addLayer({
          id: "2003",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2003"],
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
            "fill-opacity": 0.86
          }
        });
      });
            self.map.on("load", function() {
        self.map.addLayer({
          id: "2004",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2004"],
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
            "fill-opacity": 0.86
          }
        });
      });
      self.map.on("load", function() {
        self.map.addLayer({
          id: "2005",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2005"],
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
            "fill-opacity": 0.86
          }
        });
      });

      self.map.on("load", function() {
        self.map.addLayer({
          id: "2006",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2006"],
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
            "fill-opacity": 0.86
          }
        });
      });
            self.map.on("load", function() {
        self.map.addLayer({
          id: "2007",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2007"],
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
            "fill-opacity": 0.86
          }
        });
      });
            
        self.map.on("load", function() {
        self.map.addLayer({
          id: "2008",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2008"],
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
            "fill-opacity": 0.86
          }
        });
      });
      self.map.on("load", function() {
        self.map.addLayer({
          id: "2009",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2009"],
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
            "fill-opacity": 0.86
          }
        });
      });
        self.map.on("load", function() {
        self.map.addLayer({
          id: "2010",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2010"],
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
            "fill-opacity": 0.86
          }
        });
      });

        self.map.on("load", function() {
        self.map.addLayer({
          id: "2011",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2011"],
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
            "fill-opacity": 0.86
          }
        });
      });

      
        self.map.on("load", function() {
        self.map.addLayer({
          id: "2012",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2012"],
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
            "fill-opacity": 0.86
          }
        });
      });

      
        self.map.on("load", function() {
        self.map.addLayer({
          id: "2013",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2013"],
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
            "fill-opacity": 0.86
          }
        });
      });
      
        self.map.on("load", function() {
        self.map.addLayer({
          id: "2014",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2014"],
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
            "fill-opacity": 0.86
          }
        });
      });
      
        self.map.on("load", function() {
        self.map.addLayer({
          id: "2015",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2015"],
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
            "fill-opacity": 0.86
          }
        });
      });
      
        self.map.on("load", function() {
        self.map.addLayer({
          id: "2016",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2016"],
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
            "fill-opacity": 0.86
          }
        });
      });
      
        self.map.on("load", function() {
        self.map.addLayer({
          id: "2017",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2017"],
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
            "fill-opacity": 0.86
          }
        });
      });
      
        self.map.on("load", function() {
        self.map.addLayer({
          id: "2018",
          type: "fill",
          source: {
            type: "vector",
            url: "mapbox://mmcartog01.bheykam9"
          },
          layout: {
            visibility: "none"
          },
          "source-layer": "urbanPopPercentage-3dmf08",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "2018"],
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
            "fill-opacity": 0.86
          }
        });
      });
 
      var toggleablePopIds = ["1960","1970", "1980","1990","2000","2005","2010","2011","2012","2013","2014","2015","2016","2017","2018"];

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
/* The page is split between map and sidebar - the sidebar gets 1/3, map
gets 2/3 of the page. You can adjust this to your personal liking. */
/* .sidebar {
  width: 33.3333%;
} */
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

#population {
  width: 100%;
  height: 700px;
}

/* .pad2 {
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
} */
</style>
