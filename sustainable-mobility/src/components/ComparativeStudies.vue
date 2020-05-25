<template>
  <div class="pa-4">
    <v-row>
      <template v-for="({name,icolor,icon}, i) in aspects">
        <v-col
          :key="i"
          cols="12"
          md="4"
          @click="show==i+1 ? show=0:((show = 1+i), $vuetify.goTo('#comparative', { offset: -250 }) )"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :color="icolor"
              class="d-flex justify-center align-center"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              :height="show==i+1 ? 300: 270"
            >
              <v-theme-provider dark>
                <div align="center">
                  <v-avatar size="100px">
                    <v-icon size="100px" v-text="icon"></v-icon>
                  </v-avatar>
                  <v-card-title class="justify-center white--text display-2" v-text="name"></v-card-title>
                </div>
              </v-theme-provider>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>

    <!-- <CaseStudyMap id="case-study-map" /> -->
    <CoverageMap v-if="show == 1" />
    <FrequencyMap v-if="show == 2" />

    <GreenMap v-if="show == 3" />
  </div>
</template>

<script>
import CoverageMap from "./Aspects/CoverageMap";
import FrequencyMap from "./Aspects/FrequencyMap";
import GreenMap from "./Aspects/GreenMap";

import vuetify from "../plugins/vuetify";

export default {
  name: "ComparativeStudies",
  components: {
    CoverageMap,
    FrequencyMap,
    GreenMap
  },
  data: () => ({
    show: 0,
    aspects: [
      {
        name: "Coverage",
        icolor: "blue",
        icon: "mdi-map-check"
      },
      {
        name: "Accessibility",
        icolor: "amber",
        icon: "mdi-human"
      },
      {
        name: "Sustainability",
        icolor: "green",
        icon: "mdi-molecule-co2"
      }
    ]
  }),
  methods: {
    fireZurich: function() {
      this.show = 1;
      vuetify.goTo("#zur-map");
    }
  }
};
</script>

<style scoped>
.v-card {
  cursor: pointer;
}
</style>
