<template>
  <v-card flat style="padding: 0px 50px 0px 50px">
    <v-row no-gutters justify="center" class="align-center">
      <v-col cols="12" lg="4">
        <v-card-text class="display-2">Driving force 2: Increasing GDP worldwide</v-card-text>
        <v-card-text class="subtitle-1">
          From 1960s, the world's GDP has grown steadily from 1.37 Trillion US
          Dollar to nearly 86 Trillion US Dollar.
          <br />
          <br />The economic growth worldwide plays an essential role for the
          soaring demand for transportation not just regionally but
          internationally.
          <div class="py-5"></div>
        </v-card-text>
      </v-col>
      <v-col cols="12" lg="8">
        <line-chart v-if="loaded" :chartdata="datacollection" :options="options"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import LineChart from '@/scripts/LineChart'
import jsondata from '@/data/world_gdp.json'
import {colors} from '@/scripts/Utils'

export default {
  name: "GDP",
  components: {
    LineChart
  },
  data() {
      return {
          datacollection: null,
          options: null,
          loaded: false
      }
  },
  mounted() {
      this.fillData()
  },
  methods: {
    fillData() {
            // convert json to data object
            this.datacollection = {
                labels: jsondata.map(el => el.Year),
                datasets: [{
                    data: jsondata.map(el => el["GDP (Trillion US Dollar)"]),
                    fill: false,
                    backgroundColor: colors[0],
                    borderColor:colors[0]
                }]
            };

            this.options = {
                responsive: true,
                title: {
                        display: true,
                        text: 'World GDP in US Dollars (Trillion)',
                        fontColor: 'black',
                        fontSize: 18
                },
                legend: {
                    display: false,
                    labels: {
                      fontColor: 'black'
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value) {
                                return '$' + value;
                            },
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }],
                    xAxes: [{
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
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {

                            var label = data.datasets[tooltipItem.datasetIndex].label || '';

                            if (label) {
                                label += ': ';
                            }
                            label += 'GDP (Trillion US Dollar): '+tooltipItem.yLabel;

                            return label;
                        }
                    }
                }
            };
            this.loaded = true;

        }
  }
};
</script>

<style></style>
