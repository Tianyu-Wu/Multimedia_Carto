<template>
  <v-card flat :class="color">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="3">
        <v-card-text class="display-2" :class="textcolor"
          >Increasing demand for passenger transport</v-card-text
        >
        <v-card-text class="subtitle-1" :class="textcolor">
          <br />
          <br />According to the prediction by International Transport Forum
          (ITF) in their annual report Transport Outlook 2019, the demand for
          passenger transport is expected to grow in all modes of
          transportation.
          <div class="py-5"></div>
        </v-card-text>
      </v-col>
      <v-col cols="8">
        <GChart type="BarChart" @ready="onChartReady" />
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
        "https://docs.google.com/spreadsheets/d/1j-5LNLYUShev1fIwUmtqLW96z25hUeNMG4AMJwQnidU/edit?usp=sharing"
      );
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
        const data = response.getDataTable();
        console.log(data);
        chart.draw(data, options);
      });
    }
  },
  mounted() {}
};
</script>
