<template>
  <section :class="color">
    <v-container>
      <div class="py-5"></div>
      <h2 class="display-3" :class="textcolor">{{ heading }}</h2>
      <div class="py-2"></div>
      <h3 class="headline" :class="textcolor">{{ subheading }}</h3>
      <div class="py-5"></div>
    </v-container>
  </section>
</template>

<script>
// section divider with headings, subheadings, background color and text color
export default {
  name: "BaseDivider",
  props: {
    color: {
      type: String,
      default: null
    },
    heading: {
      type: String,
      default: null
    },
    subheading: {
      type: String,
      default: null
    },
    textcolor: {
      type: String,
      default: null
    }
  }
};
</script>
