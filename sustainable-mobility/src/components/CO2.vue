<template>
  <v-card flat>
    <v-row no-gutters justify="center" class="align-center">
      <v-col cols="8">
        <GChart type="AreaChart" @ready="onChartReady" />
      </v-col>
      <v-col cols="3">
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

      // construct the query to CO2 emission by sector google sheet
      const query = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1EFUlfPIvzGkztvoxXd1CKPHEl7TRiAhqB2f4OOFbYzc/edit?usp=sharing&range=A5:J11"
      );

      // get the query response and render the chart
      query.send(response => {
        const options = {
          // some custom options
          title: "CO2 emission by sector",
          isStacked: true,
          titleTextStyle: {
            color: self.textcolor
          },
          height: 600,
          backgroundColor: self.color,
          vAxis: {
            title: "MT CO2",
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
