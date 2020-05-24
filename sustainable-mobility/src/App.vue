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
      <v-btn @click="$vuetify.goTo('#summary')" text>
        <span class="mr-2">Summary</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <section id="landing">
        <Landing />
      </section>

      <base-divider id="background" v-bind="driving_forces" />
      <Population v-bind="population" />
      <v-divider />
      <GDP />

      <base-divider v-bind="development" />
      <Demand />

      <base-divider v-bind="challenges" />
      <CO2 />
      <v-divider></v-divider>
      <CurrentStatus />
      <base-divider v-bind="livability" />
      <Livability v-bind="livability" />
      <base-divider v-bind="statement" />
      <Statements />

      <base-divider v-bind="overview" />
      <Overview v-bind="overview" />

      <section id="background"></section>
      <section id="statements"></section>
      <section id="current-status"></section>
      <section id="case-studies">
        <CaseStudies />
      </section>
      <section id="summary">
        <Summary />
      </section>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import FrequencyVancouver from "./components/FrequencyVancouver";
import Landing from "./components/Landing";
import Population from "./components/Population";
import GDP from "./components/GDP";
import Demand from "./components/Demand";
import CO2 from "./components/CO2";
import Livability from "./components/Livability";
import Statements from "./components/Statements";
import CurrentStatus from "./components/CurrentStatus";
import Overview from "./components/Overview";
import CaseStudies from "./components/CaseStudies";
import Summary from "./components/Summary";
import BaseDivider from "./components/Layouts/Divider";

export default {
  name: "App",

  components: {
    Landing,
    Population,
    GDP,
    Demand,
    CO2,
    Livability,
    Statements,
    CurrentStatus,
    Overview,
    CaseStudies,
    Summary,
    BaseDivider
  },

  data: () => ({
    //titles and actions of background menu
    background_items: [
      {
        title: "Urban populations",
        action: "$vuetify.goTo('#population')"
      },
      {
        title: "Demand for transportation",
        action: "$vuetify.goTo('#demand')"
      },
      {
        title: "Urban livability",
        action: "$vuetify.goTo('#livability')"
      }
    ],
    driving_forces: {
      color: "blue-grey lighten-5",
      heading: "Driving forces of modern transportation",
      subheading:
        "Understand how cities change over the pass a few years and how these developments shape the future of urban transportation.",
      textcolor: "blue-grey--text text--darken-4"
    },
    population: {
      color: "blue-grey lighten-5",
      textcolor: "blue-grey--text text--darken-4"
    },
    gdp: {
      color: "blue-grey darken-4",
      textcolor: "blue-grey--text text--lighten-5"
    },
    development: {
      color: "blue-grey darken-4",
      heading: "Development of urban transportation",
      subheading:
        "In response to the development in urban population, increasing GDP and growing international trade, the need for transportation grows rapidly throughout the years.",
      textcolor: "blue-grey--text text--lighten-5"
    },
    challenges: {
      color: "blue-grey lighten-5",
      heading: "Challenges in modern transportation",
      subheading:
        "However, the fast-growing demand for transportation indeed brings about many challenges. Among all these challenges, the most severe one is its increasing impact on global warming. ",
      textcolor: "blue-grey--text text--darken-4"
    },
    livability: {
      color: "blue-grey lighten-5",
      heading: "Mobility vs. Livability",
      subheading:
        "The development of urban transportation also leads us to the question of urban livability. See some of the side effects that carbon-intensive tranpsortation brings us.",
      textcolor: "blue-grey--text text--darken-4"
    },
    statement: {
      color: "blue-grey darken-4",
      heading: "From carbon-intensive to sustainable",
      subheading:
        "To mitigate the challenges of modern transportation, a shift from previous carbon-intensive mode of transportation to the future of sustainable mobility is urged.",
      textcolor: "blue-grey--text text--lighten-5"
    },
    overview: {
      color: "blue-grey lighten-5",
      heading: "Overview of global sustainable mobility",
      subheading:
        "Assessing how countries and world are establishing their sustainable mobility systems through the three pillars: coverage, accessibility, and sustainability.",
      textcolor: "blue-grey--text text--darken-4"
    }
  })
};
</script>
