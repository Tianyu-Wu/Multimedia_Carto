<template>
  <v-container>
    <div class="py-12"></div>

    <h2 class="display-3 font-weight-bold mb-3">From Carbon-intensive to Sustainable Solutions</h2>
    <div class="py-5"></div>
    <v-row class="d-flex justify-space-around">
      <v-col cols="12" md="6">
        <v-img :src="require('../assets/cycle.png')" class="mb-4" height="350" max-width="100%" />
      </v-col>
      <v-col cols="12" md="6">
        <v-img :src="require('../assets/sdg.png')" class="mb-4" height="275" max-width="100%" />
      </v-col>
    </v-row>
    <div class="py-5"></div>
    <div
      class="display-1 font-weight-regular"
    >Creating sustainable transportation system is an important step towards sustainable cities.</div>
  </v-container>
</template>

<script>
export default {
  name: "Statements"
};
</script>