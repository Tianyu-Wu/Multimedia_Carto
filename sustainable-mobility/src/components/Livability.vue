<template>
  <div>
    <v-row no-gutters justify="center" class="align-center">
      <v-col cols="11">
        <v-card-text class="display-2">
          {{
          heading
          }}
        </v-card-text>
        <v-card-text class="title font-weight-regular">
          {{
          subheading
          }}
        </v-card-text>
      </v-col>
    </v-row>
    <v-container>
      <v-row class="d-flex justify-space-around">
        <v-col v-for="(image,i) in images" :key="i" cols="12" md="5">
          <v-img
            :src="require(`../assets/${image.name}.png`)"
            class="mb-4"
            height="275"
            max-width="100%"
          ></v-img>

          <h3 class="font-weight-black mb-4 text-uppercase">{{image.title}}</h3>

          <div class="subtitle-1 mb-5">{{image.text}}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Livability",
  props: {
    heading: String,
    subheading: String
  },
  data: () => ({
    images: [
      {
        title: "Air Pollution",
        name: "pollution",
        text:
          "The development of urban mobility has a significant influence on urban mobility. A good example is the impact on global warming. According to WWF (2020), around one-quarter of global CO2 emissions come from the transportation of people and goods."
      },
      {
        title: "Traffic Congestion",
        name: "congestion",
        text:
          "Meanwhile, the traffic congestion is another well known side effect with the expansion of urban transportation network, which is common to many emerging urban areas on our planet. How to solve the issue is tightly related to the livability of cities."
      }
    ]
  })
};
</script>
