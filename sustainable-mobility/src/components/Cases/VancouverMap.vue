<template>
  <div class="pa-4">
    <v-stepper non-linear>
      <v-stepper-header>
        <v-stepper-step step="1" editable>Features</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step editable step="2">Coverage</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="3">Passenger Volume</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4" editable>Green</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <base-features v-bind="features" />
        </v-stepper-content>
        <v-stepper-content step="2">
          <VancouverCoverage />
        </v-stepper-content>

        <v-stepper-content step="3">
          <VancouverFrequency />
        </v-stepper-content>

        <v-stepper-content step="4">
          <VancouverGreen />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import VancouverCoverage from "../Coverage/Vancouver-Coverage";
import VancouverFrequency from "../Frequency/Vancouver-Frequency";
import VancouverGreen from "../Green/Vancouver-Green";
import BaseFeatures from "../Layouts/Features";

export default {
  name: "VancouverMap",
  components: {
    VancouverCoverage,
    VancouverFrequency,
    VancouverGreen,
    BaseFeatures
  },
  data: () => ({
    features: {
      heading: "Vancouver - North America",
      subheading: "A land of great sustainability.",
      textcolor: "blue-grey--text text--darken-4",
      country: "Canada",
      population: "631,486",
      area: 114.97,
      ranking: [24, 23, 4],
      score: [57.79, 21.09, 99.34]
    }
  })
};
</script>
