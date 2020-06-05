<template>
  <v-card class="pa-4">
    <v-card-text class="display-2">Coverage - Zurich</v-card-text>
    <ZurichCoverage />
    <div class="py-5"></div>

    <v-divider></v-divider>
    <v-card-text class="display-2">Coverage - Singapore</v-card-text>

    <SingaporeCoverage />
    <div class="py-5"></div>

    <v-divider></v-divider>
    <v-card-text class="display-2">Coverage - Vancouver</v-card-text>
    <VancouverCoverage />
  </v-card>
</template>

<script>
import ZurichCoverage from "../Coverage/Zurich-Coverage";
import SingaporeCoverage from "../Coverage/Singapore-Coverage";
import VancouverCoverage from "../Coverage/Vancouver-Coverage";

export default {
  name: "CoverageMap",
  components: {
    ZurichCoverage,
    SingaporeCoverage,
    VancouverCoverage
  }
};
</script>
