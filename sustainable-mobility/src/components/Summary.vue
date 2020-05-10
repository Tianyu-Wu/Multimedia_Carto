<template>
  <v-container>
    <div class="py-12"></div>
    <h2 class="display-3 font-weight-bold mb-3">Summary</h2>
    <div class="py-5"></div>
    <v-container class="d-flex justify-center">
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/8Fj2ARn1WMY"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </v-container>
  </v-container>
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
