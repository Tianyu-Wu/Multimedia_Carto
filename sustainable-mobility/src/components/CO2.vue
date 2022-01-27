<template>
  <v-card flat style="padding: 0px 50px 0px 50px">
    <v-row no-gutters justify="center" class="align-center">
      <v-col cols="12" lg="8">
        <line-chart v-if="loaded" :chartdata="datacollection" :options="options"/>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card-text class="display-2">Carbon-intensive transport</v-card-text>
        <v-card-text class="subtitle-1">
          With the development of transportation worldwide, transport-induced
          emission has become the major source of GHG emission. According to WWF
          (2020), around one-quarter of global CO2 emissions come from the
          transportation of people and goods. This number continues to grow now.
          <br />
          <br />Inevitably, transportation development follows a
          carbon-intensive way up until recently.
          <div class="py-5"></div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import LineChart from '@/scripts/LineChart'
import jsondata from '@/data/co2.json'
import { colors, convertHexToRGBA } from '@/scripts/Utils'

export default {
  name: "GDP",
  components: {
    LineChart
  },
  data() {
        return {
            datacollection: null,
            options: null,
            loaded: false,
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            // convert json to data object
            // console.log(jsondata.map(el => ({"x": el.Year, "y": el["GDP (Trillion US Dollar)"]})));
            console.log(jsondata[0])
            var columns = Object.keys(jsondata[0]);
            // const datasets = columns.map(col => ({label: col, data: jsondata.map(el => el[col]), fill: false}));
            columns.shift()
            // console.log(datasets);
            
            this.datacollection = {
                labels: jsondata.map(el => el.Year),
                datasets: columns.map((col, index) => ({
                        label: col, 
                        data: jsondata.map(el => el[col]), 
                        fill: index == 0 ? true : "-1", 
                        backgroundColor: convertHexToRGBA(colors[index % colors.length], 0.5), 
                        borderColor: colors[index % colors.length],
                        borderWidth: 1
                    }))
            };

            console.log(this.datacollection.datasets);

            this.options = {
                responsive: true,
                title: {
                        display: true,
                        text: 'CO2 Emission by Sector',
                        fontColor: 'black',
                        fontSize: 18
                },
                legend: {
                    display: true, 
                    position: 'right',
                    labels: {
                      fontColor: 'black'
                    }
                },
                scales: {
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'MT C02',
                            fontSize: 15,
                            fontColor: 'black'
                        },
                        ticks: {
                          fontSize: 15,
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
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 80,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
            };
            this.loaded = true;
        }
    }
};
</script>
