<template>
  <div>
    <h2 class="font-weight-regular">{{heading}}</h2>
    <v-row>
      <v-col>
        <div class="legend-row center" :style="legendCSS"></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="legend-row d-flex justify-space-between">
          <div v-for="(label, i) in labels" :key="i">{{label}}</div>
        </div>
      </v-col>
    </v-row>
    <div class="py-3"></div>
    <span>{{notes}}</span>
  </div>
</template>

<script>
// create legend based on color. label and other information
export default {
  name: "BaseLegend",
  props: {
    heading: String,
    colors: Array,
    labels: Array,
    notes: {
      type: String,
      default: null
    }
  },
  computed: {
    legendCSS() {
      var colorString = "";

      this.colors.forEach(color => {
        colorString += "," + color;
      });

      return "background: linear-gradient(to right" + colorString + ");";
    }
  }
};
</script>

<style scoped>
.legend-row {
  width: 90%;
  height: 12px;
}
</style>