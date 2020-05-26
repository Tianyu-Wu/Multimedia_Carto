<template>
  <v-card flat :class="color" style="height: 600px">
    <v-card-text class="display-2" :class="textcolor">{{
      heading
    }}</v-card-text>
    <v-card-text class="display-1" :class="textcolor">{{
      subheading
    }}</v-card-text>
    <v-row no-gutters justify="space-around" align="center">
      <v-col cols="7">
        <v-row>
          <v-col>
            <v-card flat>
              <v-card-title class="headline">Population:</v-card-title>
              <v-card-text class="headline">{{ population }}</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card flat>
              <v-card-title class="headline">Area:</v-card-title>
              <v-card-text class="headline">{{ area }} KM^2</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-text class="headline"
          >Sustainable Mobility Score of {{ country }}</v-card-text
        >
        <v-row>
          <v-col>
            <v-row>
              <v-divider vertical class="coverage blue"></v-divider>
              <v-card flat>
                <v-card-text class="title aspects text-uppercase"
                  >Coverage</v-card-text
                >
                <v-card-text class="headline font-weight-light aspects">
                  Scored
                  <span class="display-1 font-weight-light">{{
                    score[0]
                  }}</span>
                  / 100
                </v-card-text>
<<<<<<< HEAD
                <v-card-text class="title font-weight-light aspects ">
=======
                <v-card-text class="title font-weight-light aspects">
>>>>>>> 4deeb8a7171b93255d0d9c9a3ec58bd3f3efc876
                  Rank
                  <span class="headline font-weight-light">{{
                    ranking[0]
                  }}</span>
                  / 68 countries
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-divider vertical class="access amber"></v-divider>
              <v-card flat>
                <v-card-text class="title aspects text-uppercase"
                  >Accessibility</v-card-text
                >
                <v-card-text class="headline font-weight-light aspects">
                  Scored
                  <span class="display-1 font-weight-light">{{
                    score[1]
                  }}</span>
                  / 100
                </v-card-text>
                <v-card-text class="title font-weight-light aspects">
                  Rank
                  <span class="headline font-weight-light">{{
                    ranking[1]
                  }}</span>
                  / 68 countries
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-divider vertical class="sustainable green"></v-divider>
              <v-card flat>
                <v-card-text class="title aspects text-uppercase"
                  >Sustainability</v-card-text
                >
                <v-card-text class="headline font-weight-light aspects">
                  Scored
                  <span class="display-1 font-weight-light">{{
                    score[2]
                  }}</span>
                  / 100
                </v-card-text>
                <v-card-text class="title font-weight-light aspects">
                  Rank
                  <span class="headline font-weight-light">{{
                    ranking[2]
                  }}</span>
                  / 68 countries
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <GChart
          id="feature-chart"
          type="ColumnChart"
          :data="chartData"
          :options="chartOptions"
        />
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
  data() {
    return {
      chartOptions: {
        height: 400,
        legend: "none"
      }
    };
  },
  computed: {
    colorclass() {
      return [this.color];
    },
    textclass() {
      return [this.textcolor];
    },
    chartData() {
      return [
        ["Aspect", "Score", { role: "style" }],
        ["Coverage", this.score[0], "#2196F3"],
        ["Accessibility", this.score[1], "#FFC107"],
        ["Sustainability", this.score[2], "#4CAF50"]
      ];
    }
  }
};
</script>

<style scoped>
.aspects {
  padding: 5px;
}
</style>
