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
        <GChart type="BarChart" @ready="onChartReady" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "Demand",
  components: {
    GChart
  },
  methods: {
    onChartReady(chart, google) {
      // store the ref to this
      let self = this;

      // construct the query to demand for transportation google sheet
      const query = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1j-5LNLYUShev1fIwUmtqLW96z25hUeNMG4AMJwQnidU/edit?usp=sharing"
      );

      // get the query response and render the chart
      query.send(response => {
        const options = {
          // some custom options
          title: "Demand for passenger transport by mode",
          isStacked: true,
          titleTextStyle: {
            color: self.textcolor
          },
          height: 600,
          backgroundColor: self.color,
          vAxis: {
            textStyle: {
              color: self.textcolor
            }
          },
          hAxis: {
            title: "Billion passenger-kilometres",
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
