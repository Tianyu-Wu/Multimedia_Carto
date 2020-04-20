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

        <v-toolbar-title class="font-weight-black headline"
          >Sustainable Mobility</v-toolbar-title
        >
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="$vuetify.goTo('#background')" text>
        <span class="mr-2">Background</span>
      </v-btn>
      <v-btn @click="$vuetify.goTo('#statements')" text>
        <span class="mr-2">Statement</span>
      </v-btn>
      <v-btn @click="$vuetify.goTo('#current-status')" text>
        <span class="mr-2">Current Status</span>
      </v-btn>
      <v-btn @click="$vuetify.goTo('#case-studies')" text>
        <span class="mr-2">Case Studies</span>
      </v-btn>
      <v-btn @click="$vuetify.goTo('#outlook')" text>
        <span class="mr-2">Outlook</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <section id="landing">
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
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-3'
                          : 'display-4'
                      ]"
                      class="font-weight-black"
                      >Sustainable Mobility</span
                    >
                    <br />

                    <p class="mx-auto title font-weight-light mb-8">
                      We live in a world of dynamics. Everyday, enumerous people
                      and goods are transporting between cities and countries.
                      With the development of urbanization and globalization,
                      sustainable mobility has become the most important steps
                      towards the development of sustainable cities and
                      communities.
                    </p>
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
        <Livability />
      </section>
      <section id="statements">
        <Statements />
      </section>
      <section id="current-status">
        <CurrentStatus />
      </section>
      <section id="case-studies">
        <CaseStudies />
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
import Population from "./components/Population";
import Demand from "./components/Demand";
import Livability from "./components/Livability";
import Statements from "./components/Statements";
import CurrentStatus from "./components/CurrentStatus";
import CaseStudies from "./components/CaseStudies";
import Outlook from "./components/Outlook";

export default {
  name: "App",

  components: {
    Population,
    Demand,
    Livability,
    Statements,
    CurrentStatus,
    CaseStudies,
    Outlook
  },

  data: () => ({
    //
  })
};
</script>
