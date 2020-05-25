<template>
  <v-card flat :class="color" style="height: 600px">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="7">
        <v-card-text class="display-2" :class="textcolor">{{heading}}</v-card-text>
        <v-card-text class="subtitle-1" :class="textcolor">
          {{subheading}}
          <div class="py-5"></div>
        </v-card-text>
      </v-col>
      <v-col cols="4">
        <GChart id="gdp-chart" type="LineChart" @ready="onChartReady" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "BaseFeatures",
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