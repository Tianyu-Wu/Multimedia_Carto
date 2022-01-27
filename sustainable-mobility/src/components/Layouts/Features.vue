<template>
  <v-card flat :class="color">
    <v-card-text class="display-2" :class="textcolor">
      {{
      heading
      }}
    </v-card-text>
    <v-card-text class="display-1" :class="textcolor">
      {{
      subheading
      }}
    </v-card-text>
    <v-row no-gutters justify="space-around" align="center">
      <v-col cols="12" lg="8">
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
        <v-card-text class="headline">Sustainable Mobility Score of {{ country }}</v-card-text>
        <v-row>
          <v-col
            v-for="(aspect,i) in aspects"
            :key="i"
            cols="12"
            lg="4"
            md="4"
            justify="space-around"
          >
            <v-row no-gutters>
              <v-divider vertical :class="aspect.color"></v-divider>
              <v-card flat>
                <v-card-text class="title aspects text-uppercase">{{aspect.title}}</v-card-text>
                <v-card-text class="headline font-weight-light aspects">
                  Scored
                  <span class="display-1 font-weight-light">
                    {{
                    score[i]
                    }}
                  </span>
                  / 100
                </v-card-text>
                <v-card-text class="title font-weight-light aspects">
                  Rank
                  <span class="headline font-weight-light">
                    {{
                    ranking[i]
                    }}
                  </span>
                  / 68 countries
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="4">
        <bar-chart id="feature-chart" v-if="loaded" :chartdata="datacollection" :options="options"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import BarChart from '@/scripts/BarChart'
import { theme_colors } from '@/scripts/Utils';

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
  components: {
    BarChart
  },
  data: () => ({
    aspects: [
      {
        color: "blue",
        title: "Coverage"
      },
      {
        color: "amber",
        title: "Accessibility"
      },
      {
        color: "green",
        title: "Sustainability"
      }
    ],
    chartOptions: {
      height: 400,
      legend: "none"
    },
    datacollection: null,
    options: null,
    loaded: false
  }),
  methods: {
    fillData() {
      this.datacollection = {
          labels: this.aspects.map(el => el.title),
          datasets: [{
            data: this.score,
            backgroundColor: this.aspects.map(el => theme_colors[el.title])
          }]
      };
      this.options = {
          responsive: true,
          legend: {
              display: false, 
          },
          maintainAspectRatio: false,
          layout: {
              padding: {
                  left: 10,
                  right: 10,
                  top: 10,
                  bottom: 10
              }
          },
      };
      this.loaded = true;
    }
  },
  mounted() {
      this.fillData()
  }
};
</script>

<style scoped>
.aspects {
  padding: 5px;
}
</style>
