<template>
  <v-app>
    <v-app-bar app color="white" height="100">
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-3"
          contain
          :src="require('./assets/buildings.svg')"
          transition="scale-transition"
          width="60"
        />
        <v-toolbar-title class="font-weight-black headline">Sustainable Mobility</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn v-for="(tab,i) in tabs" :key="i" @click="$vuetify.goTo(`#${tab.id}`)" text>
        <span class="mr-2">{{tab.title}}</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <Landing id="landing" />

      <base-divider id="background" v-bind="driving_forces" />
      <Population />
      <v-divider />
      <GDP />

      <base-divider v-bind="development" />
      <Demand />

      <base-divider id="challenges" v-bind="challenges" />
      <CO2 />
      <v-divider></v-divider>
      <CurrentStatus />
      <v-divider></v-divider>
      <Livability v-bind="livability" />

      <base-divider v-bind="statement" />
      <Statements />

      <base-divider id="overview" v-bind="overview" />
      <Overview />

      <base-divider id="case-studies" v-bind="cases" />
      <CaseStudies />

      <base-divider id="comparative" v-bind="compare" />
      <ComparativeStudies />

      <base-divider id="summary" v-bind="summary" />
      <Summary />
    </v-content>

    <v-footer dark color="blue-grey darken-4" padless>
      <v-card flat tile class="blue-grey darken-4 blue-grey--text text--lighten-5" width="100%">
        <Sources />
        <!-- <v-divider></v-divider>
        <v-card-text class="blue-grey--text text--lighten-5 text-center">
          &copy; {{ new Date().getFullYear() }} —
          <strong>Tianyu Wu, María Pérez Ortega, Yihang She</strong>
        </v-card-text>-->
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
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
import ComparativeStudies from "./components/ComparativeStudies";
import Summary from "./components/Summary";
import BaseDivider from "./components/Layouts/Divider";
import Sources from "./components/Layouts/Sources";

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
    ComparativeStudies,
    Summary,
    BaseDivider,
    Sources
  },

  data: () => ({
    //titles and actions of toolbar
    tabs: [
      {
        title: "Driving forces",
        id: "background"
      },
      {
        title: "Challenges",
        id: "challenges"
      },
      {
        title: "Overview",
        id: "overview"
      },
      {
        title: "Case Studies",
        id: "case-studies"
      },
      {
        title: "Summary",
        id: "summary"
      }
    ],
    // headings, subheadings, background color and text color of the sections
    driving_forces: {
      color: "blue-grey lighten-5",
      heading: "Driving forces of modern transportation",
      subheading:
        "Understand how cities change over the past a few years and how these developments shape the future of urban transportation.",
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
        "In response to the development of the urban population, increasing GDP and growing international trade, the need for transportation grows rapidly throughout the years.",
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
      heading: "Mobility vs. Livability",
      subheading:
        "The development of urban transportation also leads us to the question of urban livability. See some of the side effects that carbon-intensive transportation brings us."
    },
    statement: {
      color: "blue-grey darken-4",
      heading: "From carbon-intensive to sustainable",
      subheading:
        "To mitigate the challenges of modern transportation, a shift from previous carbon-intensive mode of transportation to the future of sustainable mobility is urgently needed.",
      textcolor: "blue-grey--text text--lighten-5"
    },
    overview: {
      color: "blue-grey lighten-5",
      heading: "Overview of global sustainable mobility",
      subheading:
        "Assessing how countries and the whole world are establishing their sustainable mobility systems through the three pillars: coverage, accessibility, and sustainability.",
      textcolor: "blue-grey--text text--darken-4"
    },
    cases: {
      color: "blue-grey darken-4",
      heading: "Case studies of sustainable mobility",
      subheading:
        "Explore regional solutions towards sustainable mobility from the perspectives of coverage, accessibility, and sustainability.",
      textcolor: "blue-grey--text text--lighten-5"
    },
    compare: {
      color: "blue-grey lighten-5",
      heading: "Comparative studies",
      subheading:
        "Comparing how the transportation systems of the three selected cities are different from each other.",
      textcolor: "blue-grey--text text--darken-4"
    },
    summary: {
      color: "blue-grey darken-4",
      heading: "Summary",
      subheading: "",
      textcolor: "blue-grey--text text--lighten-5"
    }
  })
};
</script>
