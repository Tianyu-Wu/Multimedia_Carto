<template>
  <v-card flat style="padding: 0px 50px 0px 50px">
    <v-row no-gutters justify="center" class="align-center">
      <v-col cols="12">
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
        <v-col v-for="(image,i) in images" :key="i" cols="12" lg="6" md="6">
          <v-card flat>
            <v-img
              :src="require(`../assets/${image.name}.jpg`)"
              class="mb-4"
              height="275"
              max-width="100%"
            ></v-img>
            <v-card-text>
              <h3 class="font-weight-black mb-4 text-uppercase">{{image.title}}</h3>

              <div class="subtitle-1 mb-5">{{image.text}}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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
