<template>
  <v-card flat :class="color">
    <v-container>
      <v-row no-gutters justify="space-between" align="center">
        <v-col cols="3">
          <v-card-text class="title" :class="textcolor">Coverage</v-card-text>
          <v-card-text
            class="subtitle-1"
            :class="textcolor"
          >How good is the transit infrastructure scored in your countries.</v-card-text>
          <div class="py-2"></div>
          <v-card-text class="title" :class="textcolor">Accessibility</v-card-text>
          <v-card-text
            class="subtitle-1"
            :class="textcolor"
          >How accessible the public transport to citizens. Rapid transit to resident ratio.</v-card-text>
          <div class="py-2"></div>
          <v-card-text class="title" :class="textcolor">Sustainability</v-card-text>
          <v-card-text
            class="subtitle-1"
            :class="textcolor"
          >How much impact the transport has on the environment.</v-card-text>
          <div class="py-2"></div>
        </v-col>
        <v-col cols="8">
          <GChart type="BarChart" @ready="onChartReady" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "Overview",
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
        "https://docs.google.com/spreadsheets/d/1b24jZnK_kFAlrwU6Ti_9gQLxowdx3ACJlKZs0iO6LtI/edit?usp=sharing"
      );
      query.send(response => {
        const options = {
          // some custom options
          title: "Sustainable mobility score",
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
