<template>
  <v-container>
    <div class="py-12"></div>

    <h2 class="display-3 font-weight-bold mb-3">
      From Carbon-intensive to Sustainable Solutions
    </h2>
    <div class="py-5"></div>
    <v-row class="d-flex justify-space-around">
      <v-col cols="12" md="6">
        <v-img
          :src="require('../assets/cycle.png')"
          class="mb-4"
          height="350"
          max-width="100%"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          :src="require('../assets/sdg.png')"
          class="mb-4"
          height="275"
          max-width="100%"
        />
      </v-col>
    </v-row>
    <div class="py-5"></div>
    <div class="title font-weight-light mb-5">
      Creating sustainable transportation system is an important step towards
      sustainable cities. As one of the SDGs proposed by United Nations, 'Sustainable Cities and 
      Communities' highly depends on the pattern of urban mobility, which has direct influence on 
      not only the urban environment, but also the urban livability. The question at stake here is if 
      the current mode of urban mobility in a general sense aligns with the SDG we want to achieve in the 
      future, and whether there exits some typical cases that could provide us with insights into it.
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Statements"
};
</script>
