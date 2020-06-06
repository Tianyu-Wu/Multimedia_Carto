<template>
  <div class="pa-4">
    <v-row class="align-center">
      <template v-for="(city, i) in cities">
        <v-col :key="i" cols="12" lg="4" @click="updateShow(i)
          ">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" class="align-center">
              <v-img
                :src="require(`../assets/${city.name}.jpg`)"
                :height="show == i + 1 ? 300 : 270"
                class="align-center"
              >
                <v-row no-gutters class="align-center">
                  <v-theme-provider dark>
                    <v-container fill-height>
                      <v-row class="white--text" justify="center">
                        <v-col class="white--text text-center" cols="8" tag="h1">
                          <span
                            :class="[hover ? 'display-2' : 'display-1']"
                            class="font-weight-regular"
                          >{{ city.name }}</span>
                          <br />

                          <span
                            class="font-weight-light"
                            :class="[hover ? 'display-2' : 'display-1']"
                          >{{ city.region }}</span>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-theme-provider>
                </v-row>
                <v-fade-transition>
                  <v-overlay absolute color="#000000" :opacity="0.2 * hover + 0.4" z-index="-1"></v-overlay>
                </v-fade-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>

    <div ref="caseStudyMap">
      <ZurichMap v-if="show == 1" />
      <VancouverMap v-if="show == 3" />
      <SingaporeMap v-if="show == 2" />
    </div>
  </div>
</template>

<script>
import ZurichMap from "./Cases/ZurichMap";
import VancouverMap from "./Cases/VancouverMap";
import SingaporeMap from "./Cases/SingaporeMap";

export default {
  name: "CaseStudies",
  components: {
    ZurichMap,
    SingaporeMap,
    VancouverMap
  },
  data: () => ({
    show: 0,
    cities: [
      {
        name: "Zurich",
        region: "Europe"
      },
      {
        name: "Singapore",
        region: "Asia"
      },
      {
        name: "Vancouver",
        region: "North America"
      }
    ]
  }),
  mounted() {
    var self = this;
    // listen to event from comparative study, if a tab in comparative study is clicked,
    // close up the case study
    this.$parent.$on("compareOpen", () => {
      self.show = 0;
    });
  },
  methods: {
    updateShow: function(id) {
      var self = this;
      // if click on the same opened tab, close up the case study
      if (self.show == id + 1) {
        self.show = 0;
      } else {
        // if click on the other tab, open the corresponding case study
        self.show = id + 1;
        // scroll to case study
        self.$vuetify.goTo("#case-studies", { offset: -250 });

        self.$nextTick(() => {
          // emit an event to comparative study to close up the opened comparative study
          // send the scrolling bias
          self.$parent.$emit("caseOpen", self.$refs.caseStudyMap.clientHeight);
        });
      }
    }
  }
};
</script>

<style scoped>
.v-overlay:not(.on-hover) {
  opacity: 0.4;
}

.v-card {
  cursor: pointer;
}
</style>
