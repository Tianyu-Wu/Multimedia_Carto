<template>
  <div fill-height color="#F3EBE3">
    <v-container>
      <div class="py-12"></div>

      <h2 class="display-3 font-weight-bold mb-3">Urban population vs. Mobility</h2>
      <div class="py-5"></div>
    </v-container>

    <v-img height="400" class="shrink" contain :src="require('../assets/automobile.png')" />

    <v-container>
      <div class="title font-weight-light mb-5">
        From 1960s up to now, the car production has been increasing, which
        indicates the increasing demand of urban mobility. This is largely
        accounted by the soaring urban population, which has facilitated both
        the expansion of urban area as well as associated demand for a more
        capable network of transportation.
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Demand"
};
</script>
