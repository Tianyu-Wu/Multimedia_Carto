<template>
  <v-card flat style="padding: 0px 50px 0px 50px">
    <v-container>
      <v-row no-gutters justify="space-between" class="align-top">
        <v-col v-for="(aspect,i) in aspects" :key="i" cols="12" lg="4" md="4">
          <v-card-title>
            <div class="legend-div" :class="aspect.color" />
            <span class="title">{{aspect.title}}</span>
          </v-card-title>
          <v-card-text class="subtitle-1">{{aspect.text}}</v-card-text>
        </v-col>
      </v-row>
      <div class="py-2"></div>

      <v-row>
        <v-col style="max-height: 600px" class="overflow-y-auto">
          <horizontal-bar-chart v-if="loaded" :chartdata="datacollection" :options="options"/>
        </v-col>
      </v-row>
      <div class="py-2"></div>
    </v-container>
  </v-card>
</template>

<script>
import HorizontalBarChart from '@/scripts/HorizontalBarChart'
import jsondata from '@/data/three_aspect_scaled.json'
import {theme_colors} from '@/scripts/Utils'

export default {
  name: "Overview",
  components: {
    HorizontalBarChart
  },
  data: () => ({
    aspects: [
      {
        color: "blue",
        title: "Coverage",
        text:
          "How good is the transit infrastructure scored in the given country."
      },
      {
        color: "amber",
        title: "Accessibility",
        text:
          "How accessible is the public transport to citizens. E.g. Rapid transit to resident ratio."
      },
      {
        color: "green",
        title: "Sustainability",
        text: "How much impact does the transportation have on the environment."
      }
    ],
    datacollection: null,
    options: null,
    loaded: false,
  }),
  mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            // convert json to data object
            console.log(jsondata[0])
            var columns = Object.keys(jsondata[0]);
            columns.shift()
            
            this.datacollection = {
                labels: jsondata.map(el => el.COUNTRY),
                datasets: columns.map(col => ({
                        label: col, 
                        data: jsondata.map(el => el[col]), 
                        backgroundColor: theme_colors[col], 
                        borderColor: 'white',
                        borderWidth: 1
                    }))
            };

            this.options = {
                responsive: true,
                title: {
                        display: true,
                        text: 'Sustainable Mobility Score',
                        fontColor: 'black',
                        fontSize: 18
                },
                legend: {
                    display: false, 
                },
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                          fontSize: 13,
                          fontColor: 'black'
                        }
                  
                    }],
                    xAxes: [{
                        stacked: true,
                        ticks: {
                          fontSize: 15,
                          fontColor: 'black'
                        }
                    }]
                },
                maintainAspectRatio: true,
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
            };
            this.loaded = true;
        }
    },
};
</script>

<style scoped>
.legend-div {
  margin-right: 10px;
  height: 15px;
  width: 30px;
  padding: 2px;
}
</style>
