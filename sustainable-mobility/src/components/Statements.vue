<template>
  <v-card flat style="padding: 0px 50px 0px 50px">
    <div class="py-5"></div>

    <v-row no-gutters justify="center" class="align-center">
      <v-col cols="12" lg="6">
        <v-img :src="require('../assets/sdg.png')" class="mb-4" contain />
      </v-col>
      <v-col cols="12" lg="6">
        <v-card-text class="display-2">SDG 11: sustainable cities and communities</v-card-text>
        <v-card-text class="subtitle-1">
          In 2016, the UN proposes the SDG 11: sustainable cities and
          communities. As an indivisible dimension of our daily life, a
          transportation system has direct influences on not only the
          environment but also the livability of cities and communities.
          <br />
          <br />Therefore, creating a sustainable transportation system is an
          important step towards this goal.
          <div class="py-5"></div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Statements"
};
</script>
