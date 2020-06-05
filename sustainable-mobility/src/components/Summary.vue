<template>
  <div>
    <v-card class="blue-grey--text text--darken-4" flat>
      <v-container>
        <v-card-text v-for="(paragraph,i) in paragraphs" :key="i" class="headline">{{paragraph}}</v-card-text>
      </v-container>
    </v-card>
    <v-card class="blue-grey lighten-5 blue-grey--text text--darken-4" flat>
      <div class="py-3"></div>

      <v-container class="justify-center">
        <v-row no-gutters class="align-center" justify="space-between">
          <v-col cols="12" lg="4" md="4">
            <v-card-text class="display-2">Checkout more in the video!</v-card-text>
          </v-col>
          <v-col cols="12" lg="8" md="8" class="align-right">
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/8Fj2ARn1WMY"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-2"></div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Summary",
  data: () => ({
    paragraphs: [
      "Creating sustainable cities and communities is a crucial component of the Sustainable Development Goals. Living in an era of urbanization and globalization, transportation plays an essential role in the development of sustainable cities.",
      "In this atlas, we reviewed the driving forces behind modern transportation together with the challenges of the current systems and further assessed the status of sustainable mobility worldwide from the perspective of coverage, accessibility, and sustainability.",
      "We selected three featuring regional cases - Zurich, Singapore, and Vancouver, where we took a closer look at their solutions towards sustainable mobility and compared them based on three aspects.",
      "We hope that this atlas can contribute to understanding of sustainable mobility and the realization of sustainable cities worldwide in the future."
    ]
  })
};
</script>
