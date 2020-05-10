<template>
  <v-container>
    <div class="py-12"></div>

    <h2 class="display-3 font-weight-bold mb-3">
      Urban mobility vs. Livability
    </h2>
    <div class="py-5"></div>
    <v-row class="d-flex justify-space-around">
      <v-col cols="12" md="5">
        <v-img
          :src="require('../assets/pollution.png')"
          class="mb-4"
          height="275"
          max-width="100%"
        ></v-img>

        <h3 class="font-weight-black mb-4 text-uppercase">Air poulltion</h3>

        <div class="title font-weight-light mb-5">
          The development of urban mobility has significant influence on urban
          mobility. A good example is the its impacts on global warming.
          According to WWF (2020), around one-quarter of global CO2 emissions
          come from the transportation of people and goods.
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <v-img
          :src="require('../assets/congestion.png')"
          class="mb-4"
          height="275"
          max-width="100%"
        ></v-img>

        <h3 class="font-weight-black mb-4 text-uppercase">
          Traffic Congestion
        </h3>

        <div class="title font-weight-light mb-5">
          Meanwhile, the traffic congestion is another well known side effect
          with the expansion of urban transportation network, which is common
          over many emerging urban areas on our planet. How to solve the issue
          is tightly related to the livability of cities.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Livability"
};
</script>
