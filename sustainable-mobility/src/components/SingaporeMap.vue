<template>
  <div>
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Singapore - Asia</h2>
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
          <SingaporeCoverage />
        </v-stepper-content>

        <v-stepper-content step="2">
          <SingaporeFrequency />
        </v-stepper-content>

        <v-stepper-content step="3">
          <SingaporeGreen />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import SingaporeGreen from "./Green/Singapore-Green";
// import VancouverGreen from "./Green/Vancouver-Green";
// import VancouverFrequency from "./Frequency/Vancouver-Frequency";
import SingaporeFrequency from "./Frequency/Singapore-Frequency";
import SingaporeCoverage from "./Coverage/Singapore-Coverage";

export default {
  name: "SingaporeMap",
  components: {
    SingaporeCoverage,
    SingaporeFrequency,
    SingaporeGreen
  }
};
</script>
