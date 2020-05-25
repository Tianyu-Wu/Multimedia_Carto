<template>
  <div :class="color">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="11">
        <v-card-text class="display-2" :class="textcolor">{{
          heading
        }}</v-card-text>
        <v-card-text class="title font-weight-light" :class="textcolor">{{
          subheading
        }}</v-card-text>
      </v-col>
    </v-row>
    <v-container>
      <v-row class="d-flex justify-space-around">
        <v-col cols="12" md="5">
          <v-img
            :src="require('../assets/pollution.png')"
            class="mb-4"
            height="275"
            max-width="100%"
          ></v-img>

          <h3 class="font-weight-black mb-4 text-uppercase" :class="textcolor">
            Air Pollution
          </h3>

          <div class="title font-weight-light mb-5" :class="textcolor">
            The development of urban mobility has significant influence on urban
            mobility. A good example is the impact on global warming. According
            to WWF (2020), around one-quarter of global CO2 emissions come from
            the transportation of people and goods.
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
  </div>
</template>

<script>
export default {
  name: "Livability",
  props: {
    color: String,
    heading: String,
    subheading: String,
    textcolor: {
      type: String,
      default: null
    }
  }
};
</script>
