<template>
  <section :class="colorclass">
    <v-container>
      <div class="py-5"></div>
      <h2 class="display-3" :class="textcolor">{{heading}}</h2>
      <div class="py-2"></div>
      <h3 class="headline" :class="textclass">{{subheading}}</h3>
      <div class="py-5"></div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "BaseDivider",
  props: {
    color: String,
    heading: String,
    subheading: String,
    textcolor: {
      type: String,
      default: null
    }
  },

  computed: {
    colorclass() {
      return [this.color];
    },
    textclass() {
      return [this.textcolor];
    }
  }
};
</script>