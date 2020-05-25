<template>
  <v-card class="pa-4">
    <v-card-text class="display-2">Zurich</v-card-text>
    <ZurichFrequency />
    <div class="py-5"></div>

    <v-divider></v-divider>
    <v-card-text class="display-2">Singapore</v-card-text>

    <SingaporeFrequency />
    <div class="py-5"></div>

    <v-divider></v-divider>
    <v-card-text class="display-2">Vancouver</v-card-text>
    <VancouverFrequency />
  </v-card>
</template>

<script>
import ZurichFrequency from "../Frequency/Zurich-Frequency";
import SingaporeFrequency from "../Frequency/Singapore-Frequency";
import VancouverFrequency from "../Frequency/Vancouver-Frequency";

export default {
  name: "FrequencyMap",
  components: {
    ZurichFrequency,
    SingaporeFrequency,
    VancouverFrequency
  },
  data: () => ({})
};
</script>
