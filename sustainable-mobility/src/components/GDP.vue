<template>
  <v-card flat :class="color">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="3">
        <v-card-text class="display-2" :class="textcolor"
          >Driving force 2: Increasing GDP worldwide</v-card-text
        >
        <v-card-text class="subtitle-1" :class="textcolor">
          From 1960s, the world's GDP has grown steadily from 1.37 Trillion US
          Dollar to nearly 86 Trillion US Dollar.
          <br />
          <br />The economic growth worldwide plays an essential role for the
          soaring demand for transportation not just regionally but
          internationally.
          <div class="py-5"></div>
        </v-card-text>
      </v-col>
      <v-col cols="8">
        <GChart id="gdp-chart" type="LineChart" @ready="onChartReady" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "GDP",
  props: {
    color: String,
    textcolor: String
  },
  components: {
    GChart
  },
  methods: {
    onChartReady(chart, google) {
      let self = this;
      const query = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1lARrVYXNGqIRp6PxEp60PzfhWSr5xdXxJycsDEI5x30/edit?usp=sharing"
      );
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
        const data = response.getDataTable();
        console.log(data);
        chart.draw(data, options);
      });
    }
  },
  mounted() {}
};
</script>

<style></style>
