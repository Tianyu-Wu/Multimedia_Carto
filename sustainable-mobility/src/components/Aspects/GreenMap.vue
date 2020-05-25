<template>
  <v-card class="pa-4">
    <v-card-text class="display-2">Zurich</v-card-text>
    <ZurichGreen />
    <div class="py-5"></div>

    <v-divider></v-divider>
    <v-card-text class="display-2">Singapore</v-card-text>

    <SingaporeGreen />
    <div class="py-5"></div>

    <v-divider></v-divider>
    <v-card-text class="display-2">Vancouver</v-card-text>
    <VancouverGreen />
  </v-card>
</template>

<script>
import ZurichGreen from "../Green/Zurich-Green";
import SingaporeGreen from "../Green/Singapore-Green";
import VancouverGreen from "../Green/Vancouver-Green";

export default {
  name: "GreenMap",
  components: {
    ZurichGreen,
    SingaporeGreen,
    VancouverGreen
  },
  data: () => ({})
};
</script>
