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
          <ZurichCoverage />
        </v-stepper-content>

        <v-stepper-content step="3">
          <ZurichFrequency />
        </v-stepper-content>

        <v-stepper-content step="4">
          <ZurichGreen />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import ZurichCoverage from "../Coverage/Zurich-Coverage";
import ZurichFrequency from "../Frequency/Zurich-Frequency";
import ZurichGreen from "../Green/Zurich-Green";
import BaseFeatures from "../Layouts/Features";

export default {
  name: "ZurichMap",
  // props: ["show"],
  components: {
    ZurichCoverage,
    ZurichFrequency,
    ZurichGreen,
    BaseFeatures
  },
  data: () => ({
    features: {
      color: null,
      heading: "Zurich - Europe",
      subheading: "A pioneer of sustainable transport.",
      textcolor: "blue-grey--text text--darken-4",
      country: "Switzerland",
      population: "415,215",
      area: 87.88,
      ranking: [2, 6, 12],
      score: [92.99, 68.42, 94.79]
    }
  })
};
</script>
