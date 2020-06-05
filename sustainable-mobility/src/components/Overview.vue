<template>
  <v-card flat>
    <v-container>
      <v-row no-gutters justify="space-between" class="align-top">
        <v-col v-for="(aspect,i) in aspects" :key="i" cols="3">
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
          <GChart type="BarChart" @ready="onChartReady" />
        </v-col>
      </v-row>
      <div class="py-2"></div>
    </v-container>
  </v-card>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "Overview",
  components: {
    GChart
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
    ]
  }),
  methods: {
    onChartReady(chart, google) {
      let self = this;
      const query = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1b24jZnK_kFAlrwU6Ti_9gQLxowdx3ACJlKZs0iO6LtI/edit?usp=sharing"
      );
      query.send(response => {
        const data = response.getDataTable();

        var paddingHeight = 100;
        var rowHeight = data.getNumberOfRows() * 20;
        var chartHeight = rowHeight + paddingHeight;

        const options = {
          // some custom options
          title: "Sustainable mobility score",
          isStacked: true,
          titleTextStyle: {
            color: self.textcolor
          },
          legend: "none",
          //   legend: { position: "top" },
          height: chartHeight,
          chartArea: {
            height: rowHeight
          },
          backgroundColor: self.color,
          vAxis: {
            textStyle: {
              color: self.textcolor
            }
          },
          hAxis: {
            textStyle: {
              color: self.textcolor
            }
          },
          series: {
            0: { color: "#2196F3" },
            1: { color: "#FFC107" },
            2: { color: "#4CAF50" }
          }
        };
        chart.draw(data, options);
      });
    }
  },
  mounted() {}
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
