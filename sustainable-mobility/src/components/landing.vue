<template>
  <v-parallax
    height="700"
    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
    :src="require('../assets/background1280.jpg')"
  >
    <v-overlay absolute opacity="0.6">
      <v-row no-gutters align="center">
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="white--text" justify="center">
              <v-col class="white--text text-center" cols="8" tag="h1">
                <span
                  :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-3'
                          : 'display-4'
                      ]"
                  class="font-weight-black"
                >Sustainable Mobility</span>
                <div class="py-5"></div>

                <p class="mx-auto title font-weight-regular mb-8 display-1">
                  We live in a world of dynamics. Everyday, enumerous people
                  and goods are transporting between cities and countries.
                  With the development of urbanization and globalization,
                  sustainable mobility has become the most important steps
                  towards the development of sustainable cities and
                  communities.
                </p>

                <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#background')">
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-row>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {
  name: "Landing",
  data: () => ({})
};
</script>
