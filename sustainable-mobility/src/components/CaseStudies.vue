<template>
  <div>
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">
        Explore next solutions with Case Studies worldwide
      </h2>
      <div class="py-5"></div>
    </v-container>
    <v-row>
      <v-col cols="12" md="4" @click="$vuetify.goTo('#case-study-map')">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-parallax height="600" :src="require('../assets/zurich.jpg')">
              <v-row no-gutters align="center">
                <v-theme-provider dark>
                  <v-container fill-height>
                    <v-row align="center" class="white--text" justify="center">
                      <v-col class="white--text text-center" cols="8" tag="h1">
                        <span
                          :class="[hover ? 'display-3' : 'display-2']"
                          class="font-weight-regular"
                          >Zurich</span
                        >
                        <br />

                        <span
                          class="font-weight-light"
                          :class="[hover ? 'display-2' : 'display-1']"
                          >Europe</span
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-theme-provider>
              </v-row>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#000000"
                  opacity="0.2"
                  z-index="-1"
                ></v-overlay>
              </v-fade-transition>
            </v-parallax>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4" @click="$vuetify.goTo('#case-study-map')">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-parallax height="600" :src="require('../assets/vancouver.jpg')">
              <v-row no-gutters align="center">
                <v-theme-provider dark>
                  <v-container fill-height>
                    <v-row align="center" class="white--text" justify="center">
                      <v-col class="white--text text-center" cols="8" tag="h1">
                        <span
                          :class="[hover ? 'display-3' : 'display-2']"
                          class="font-weight-regular"
                          >Vancouver</span
                        >
                        <br />

                        <span
                          class="font-weight-light"
                          :class="[hover ? 'display-2' : 'display-1']"
                          >North America</span
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-theme-provider>
              </v-row>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#000000"
                  opacity="0.2"
                  z-index="-1"
                ></v-overlay>
              </v-fade-transition>
            </v-parallax>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4" @click="$vuetify.goTo('#case-study-map')">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-parallax height="600" :src="require('../assets/singapore2.jpg')">
              <v-row no-gutters align="center">
                <v-theme-provider dark>
                  <v-container fill-height>
                    <v-row align="center" class="white--text" justify="center">
                      <v-col class="white--text text-center" cols="8" tag="h1">
                        <span
                          :class="[hover ? 'display-3' : 'display-2']"
                          class="font-weight-regular"
                          >Singapore</span
                        >
                        <br />

                        <span
                          class="font-weight-light"
                          :class="[hover ? 'display-2' : 'display-1']"
                          >Asia</span
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-theme-provider>
              </v-row>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#000000"
                  opacity="0.2"
                  z-index="-1"
                ></v-overlay>
              </v-fade-transition>
            </v-parallax>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <CaseStudyMap id="case-study-map" />
  </div>
</template>

<script>
import CaseStudyMap from "./CaseStudyMap";

export default {
  name: "CaseStudies",
  components: {
    CaseStudyMap
  }
};
</script>

<style>
.col-12 {
  padding: 0px !important;
}
</style>