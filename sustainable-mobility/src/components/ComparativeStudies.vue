<template>
  <div class="pa-4">
    <v-row class="align-center">
      <template v-for="({ name, icolor, icon }, i) in aspects">
        <v-col :key="i" cols="12" lg="4" @click="updateShow(i)
          ">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :color="icolor"
              class="d-flex justify-center align-center"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              :height="show == i + 1 ? 300 : 270"
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

    <CoverageMap v-if="show == 1" />
    <FrequencyMap v-if="show == 2" />
    <GreenMap v-if="show == 3" />
  </div>
</template>

<script>
import CoverageMap from "./Aspects/CoverageMap";
import FrequencyMap from "./Aspects/FrequencyMap";
import GreenMap from "./Aspects/GreenMap";

export default {
  name: "ComparativeStudies",
  components: {
    CoverageMap,
    FrequencyMap,
    GreenMap
  },
  data: () => ({
    show: 0,
    bias: 0,
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
    updateShow: function(id) {
      var self = this;
      // if clicking on the same opened tab, close up the comparative study
      if (self.show == id + 1) {
        self.show = 0;
      } else {
        // if clicking on the other tabs, open the corresponding comparative study
        self.show = id + 1;
        // emit an event to case study to close up the opened case studies
        self.$parent.$emit("compareOpen");

        // scroll to the comparative study
        // take care of the bias if case study is open
        self.$vuetify.goTo("#comparative", { offset: -250 + self.bias });
        // reset scrolling bias
        self.bias = 0;
      }
    }
  },
  mounted() {
    var self = this;
    this.$parent.$on("caseOpen", height => {
      self.show = 0;
      // if the case study is open, add a scrolling bias
      self.bias = height;
    });
  }
};
</script>

<style scoped>
.v-card {
  cursor: pointer;
}
</style>
