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
          <SingaporeCoverage />
        </v-stepper-content>

        <v-stepper-content step="3">
          <SingaporeFrequency />
        </v-stepper-content>

        <v-stepper-content step="4">
          <SingaporeGreen />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import SingaporeGreen from "../Green/Singapore-Green";
import SingaporeFrequency from "../Frequency/Singapore-Frequency";
import SingaporeCoverage from "../Coverage/Singapore-Coverage";
import BaseFeatures from "../Layouts/Features";

export default {
  name: "SingaporeMap",
  components: {
    SingaporeCoverage,
    SingaporeFrequency,
    SingaporeGreen,
    BaseFeatures
  },
  data: () => ({
    features: {
      color: null,
      heading: "Singapore - Asia",
      subheading: "A pioneer of smart transportation.",
      textcolor: "blue-grey--text text--darken-4"
    }
  })
};
</script>
