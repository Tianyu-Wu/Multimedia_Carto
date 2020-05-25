<template>
  <v-card flat :class="color" style="height: 600px">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="7">
        <v-card-text class="display-2" :class="textcolor">{{heading}}</v-card-text>
        <v-card-text class="subtitle-1" :class="textcolor">
          {{subheading}}
          <div class="py-5"></div>
        </v-card-text>
        <v-row>
          <v-col>
            <v-card flat>
              <v-card-title>Population:</v-card-title>
              <v-card-text>{{population}} Million</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card flat>
              <v-card-title>Area:</v-card-title>
              <v-card-text>{{area}} KM^2</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-card-text>Sustainable Mobility Score of {{country}}</v-card-text>
        <v-row>
          <v-col>
            <v-row>
              <v-divider vertical class="coverage blue"></v-divider>

              <v-card flat>
                <v-card-text>Coverage</v-card-text>
                <v-card-text>Scored {{score[0]}} out of 100</v-card-text>
                <v-card-text>Rank {{ranking[0]}} out of 68 countries</v-card-text>
              </v-card>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-divider vertical class="access amber"></v-divider>
              <v-card flat>
                <v-card-text>Accessibility</v-card-text>
                <v-card-text>Scored {{score[1]}} out of 100</v-card-text>
                <v-card-text>Rank {{ranking[1]}} out of 68 countries</v-card-text>
              </v-card>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-divider vertical class="sustainable green"></v-divider>
              <v-card flat>
                <v-card-text>Sustainability</v-card-text>
                <v-card-text>Scored {{score[2]}} out of 100</v-card-text>
                <v-card-text>Rank {{ranking[2]}} out of 68 countries</v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <GChart id="gdp-chart" type="LineChart" @ready="onChartReady" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "BaseFeatures",
  props: {
    color: String,
    heading: String,
    subheading: String,
    textcolor: {
      type: String,
      default: null
    },
    country: String,
    population: String,
    area: Number,
    ranking: Array,
    score: Array
  },

  computed: {
    colorclass() {
      return [this.color];
    },
    textclass() {
      return [this.textcolor];
    }
  }
};
</script>

<style scoped>
/* .coverage {
  color: #2196F3
} */
</style>