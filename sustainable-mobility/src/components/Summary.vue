<template>
  <v-card class="blue-grey lighten-5 blue-grey--text text--darken-4" flat>
    <div class="py-3"></div>

    <v-container class="justify-center">
      <v-row no-gutters align="center" justify="space-between">
        <v-col cols="4">
          <v-card-text class="display-2">Checkout more in the video!</v-card-text>
        </v-col>
        <v-col cols="8" align="right">
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
</template>

<script>
export default {
  name: "Summary",
  data: () => ({
    items: [
      {
        id: "1",
        content:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/8Fj2ARn1WMY" frameborder="0" allowfullscreen></iframe>'
      }
    ]
  })
};
</script>
<style>
#iframe {
  position: fixed;
  margin: auto;
  width: 100%;
  height: 500px;
}
</style>
