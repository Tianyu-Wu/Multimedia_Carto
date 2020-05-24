<template>
  <v-card flat :class="color">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="8">
        <GChart type="AreaChart" @ready="onChartReady" />
      </v-col>
      <v-col cols="3">
        <v-card-text class="display-2" :class="textcolor">Carbon-intensive transport</v-card-text>
        <v-card-text class="subtitle-1" :class="textcolor">
          With the development of transportation worldwide, transport-induced emission has become the major source of GHG emission. According to WWF (2020), around one-quarter of global CO2 emissions come from the transportation of people and goods. This number continues to grow now.
          <br />
          <br />Inevitably, transportation development follows a carbon-intensive way up until recently.
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
        "https://docs.google.com/spreadsheets/d/1EFUlfPIvzGkztvoxXd1CKPHEl7TRiAhqB2f4OOFbYzc/edit?usp=sharing&range=A5:J11"
      );
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
        const data = response.getDataTable();
        console.log(data);
        chart.draw(data, options);
      });
    }
  },
  mounted() {}
};
</script>
