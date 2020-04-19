<template>
  <v-parallax
    dark
    src="../assets/background1280.jpg"
    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="8">
        <span
          :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
          class="font-weight-black"
        >Sustainable Mobility</span>
        <br />

        <span
          class="mx-auto title font-weight-light mb-8"
        >We live in a world of dynamics. Everyday, enumerous people and goods are transporting between cities and countries. With the development of urbanization and globalization, sustainable mobility has become the most important steps towards the development of sustainable cities and communities.</span>
        <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#background')">
          <v-icon>mdi-chevron-double-down</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "landing",
  data: () => ({})
};
</script>