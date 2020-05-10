<template>
  <v-content>
    <section id="landing">
      <v-row no-gutters>
        <v-parallax
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          :src="require('../assets/background.jpg')"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4'
                    ]"
                    class="font-weight-black"
                    >Sustainable Mobility</span
                  >
                  <br />

                  <v-responsive
                    class="mx-auto title font-weight-light mb-8"
                    max-width="720"
                    >We live in a world of dynamics. Everyday, enumerous people
                    and goods are transporting between cities and countries.
                    With the development of urbanization and globalization,
                    sustainable mobility has become the most important steps
                    towards the development of sustainable cities and
                    communities.</v-responsive
                  >
                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#background')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-parallax>
      </v-row>
    </section>

    <section id="background">
      <Population />
      <Demand />
      <Liability />
    </section>
    <section id="statements">
      <Statements />
    </section>
    <section id="current-status">
      <CurrentStatus />
    </section>
    <section id="summary">
      <Summary />
    </section>
  </v-content>
</template>

<script>
import Population from "./Population";
import Demand from "./Demand";
import Liability from "./Liability";
import Statements from "./Statements";
import CurrentStatus from "./CurrentStatus";
import Summary from "./Summary";

export default {
  name: "Structure",
  components: {
    Population,
    Demand,
    Liability,
    Statements,
    CurrentStatus,
    Summary
  },
  data: () => ({})
};
</script>
