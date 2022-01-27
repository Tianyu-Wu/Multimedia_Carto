<template>
  <v-card flat style="padding: 0px 50px 0px 50px">
    <v-row no-gutters justify="center" class="align-center">
      <v-col cols="12" lg="4">
        <v-card-text class="display-2">Increasing demand for passenger transport</v-card-text>
        <v-card-text class="subtitle-1">
          <br />
          <br />According to the prediction by International Transport Forum
          (ITF) in their annual report Transport Outlook 2019, the demand for
          passenger transport is expected to grow in all modes of
          transportation.
          <div class="py-5"></div>
        </v-card-text>
      </v-col>
      <v-col cols="12" lg="8">
        <horizontal-bar-chart v-if="loaded" :chartdata="datacollection" :options="options"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import HorizontalBarChart from '@/scripts/HorizontalBarChart'
import jsondata from '@/data/demand.json'
import { colors } from '@/scripts/Utils';

export default {
  name: "Demand",
  components: {
    HorizontalBarChart
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
            var columns = Object.keys(jsondata[0]);
            // remove the Year column from the array
            columns.shift()
            
            this.datacollection = {
                labels: jsondata.map(el => el.Year),
                datasets: columns.map((col, index) => ({
                        label: col, 
                        data: jsondata.map(el => el[col]), 
                        fill: false, 
                        backgroundColor: colors[index % colors.length], 
                        borderColor: 'white',
                        borderWidth: 1
                    }))
            };

            this.options = {
                responsive: true,
                title: {
                        display: true,
                        text: 'Demand for Passenger Transport by Mode',
                        fontColor: 'black',
                        fontSize: 18
                },
                legend: {
                    display: true, 
                    position: 'right',
                    labels: {
                      fontColor: 'black',
                    }
                },
                scales: {
                    yAxes: [{
                        stacked: true,
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
