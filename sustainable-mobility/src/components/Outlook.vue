<template>
  <v-container>
    <div class="py-12"></div>
    <h2 class="display-3 font-weight-bold mb-3">
      Outlook
    </h2>
    <div class="py-5"></div>
    <v-card
      class="d-flex flex-column justify-center"
      shaped
      height="400"
      v-for="item in items"
      :key="item.id"
      v-html="item.content"
    >
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Outlook",
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
