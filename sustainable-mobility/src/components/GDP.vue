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
        <GChart id="gdp-chart" type="LineChart" @ready="onChartReady" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "GDP",
  components: {
    GChart
  },
  methods: {
    onChartReady(chart, google) {
      // store the ref to this
      let self = this;

      // construct the query to GDP google sheet
      const query = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1lARrVYXNGqIRp6PxEp60PzfhWSr5xdXxJycsDEI5x30/edit?usp=sharing"
      );

      // get query result and render the plot
      query.send(response => {
        const options = {
          // some custom options
          title: "World GDP in US Dollars (Trillion)",
          titleTextStyle: {
            color: self.textcolor
          },
          height: 600,
          legend: "none",
          backgroundColor: self.color,
          vAxis: {
            format: "currency",
            textStyle: {
              color: self.textcolor
            }
          },
          hAxis: {
            textStyle: {
              color: self.textcolor
            }
          }
        };

        // get the data table
        const data = response.getDataTable();

        // draw chart
        chart.draw(data, options);
      });
    }
  },
  mounted() {}
};
</script>

<style></style>
