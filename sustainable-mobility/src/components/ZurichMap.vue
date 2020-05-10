<template>
  <div>
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Zurich - Europe</h2>
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
          <ZurichCoverage />
        </v-stepper-content>

        <v-stepper-content step="2">
          <ZurichFrequency />
        </v-stepper-content>

        <v-stepper-content step="3">
          <ZurichGreen />
        </v-stepper-content>
        <!-- <v-btn color="amber" dark fab right bottom @click="$vuetify.goTo('#case-studies')">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>-->
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import ZurichCoverage from "./Coverage/Zurich-Coverage";
import ZurichFrequency from "./Frequency/Zurich-Frequency";
import ZurichGreen from "./Green/Zurich-Green";
// import SingaporeGreen from "./Green/Singapore-Green";
// import VancouverGreen from "./Green/Vancouver-Green";
// import VancouverFrequency from "./Frequency/Vancouver-Frequency";
// import SingaporeFrequency from "./Frequency/Singapore-Frequency";

export default {
  name: "ZurichMap",
  components: {
    ZurichCoverage,
    ZurichFrequency,
    ZurichGreen
  }
};
</script>