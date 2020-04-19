<template>
  <v-app>
    <v-app-bar app color="white" height="100">
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-3"
          contain
          :src="require('./assets/citylogo.svg')"
          transition="scale-transition"
          width="70"
        />

        <v-toolbar-title class="font-weight-black headline">Sustainable Mobility</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn href="." target="_blank" text>
        <span class="mr-2">Background</span>
      </v-btn>
      <v-btn href="." target="_blank" text>
        <span class="mr-2">Statement</span>
      </v-btn>
      <v-btn href="." target="_blank" text>
        <span class="mr-2">Current Status</span>
      </v-btn>
      <v-btn href="." target="_blank" text>
        <span class="mr-2">Case Studies</span>
      </v-btn>
      <v-btn href="." target="_blank" text>
        <span class="mr-2">Outlook</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <section id="landing">
        <!-- <landing /> -->

        <v-parallax
          height="700"
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          :src="require('./assets/background1280.jpg')"
        >
          <v-row no-gutters align="center">
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row align="center" class="white--text" justify="center">
                  <v-col class="white--text text-center" cols="8" tag="h1">
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >Sustainable Mobility</span>
                    <br />

                    <p
                      class="mx-auto title font-weight-light mb-8"
                    >We live in a world of dynamics. Everyday, enumerous people and goods are transporting between cities and countries. With the development of urbanization and globalization, sustainable mobility has become the most important steps towards the development of sustainable cities and communities.</p>
                    <v-btn
                      class="align-self-end"
                      fab
                      outlined
                      @click="$vuetify.goTo('#background')"
                    >
                      <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-row>
        </v-parallax>
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
      <section id="outlook">
        <Outlook />
      </section>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import FrequencyVancouver from "./components/FrequencyVancouver";
// import Structure from "./components/Structure";
import Population from "./components/Population";
import Demand from "./components/Demand";
import Liability from "./components/Liability";
import Statements from "./components/Statements";
import CurrentStatus from "./components/CurrentStatus";
import Outlook from "./components/Outlook";
// import landing from "./components/landing";

export default {
  name: "App",

  components: {
    Population,
    Demand,
    Liability,
    Statements,
    CurrentStatus,
    Outlook
    // landing
  },

  data: () => ({
    //
  })
};
</script>
