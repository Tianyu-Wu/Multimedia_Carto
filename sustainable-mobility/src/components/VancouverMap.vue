<template>
  <div>
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Vancouver - North America</h2>
      <!-- <div class="py-5"></div> -->
    </v-container>
    <v-stepper non-linear>
      <v-stepper-header>
        <v-stepper-step editable step="1">Coverage</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2">Passenger Volume</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" editable>Green</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <VancouverCoverage />
        </v-stepper-content>

        <v-stepper-content step="2">
          <VancouverFrequency />
        </v-stepper-content>

        <v-stepper-content step="3">
          <VancouverGreen />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import VancouverCoverage from "./Coverage/Vancouver-Coverage";
import VancouverFrequency from "./Frequency/Vancouver-Frequency";
import VancouverGreen from "./Green/Vancouver-Green";

export default {
  name: "VancouverMap",
  components: {
    VancouverCoverage,
    VancouverFrequency,
    VancouverGreen
  }
};
</script>