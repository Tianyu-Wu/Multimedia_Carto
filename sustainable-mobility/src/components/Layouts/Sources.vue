<template>
  <v-expansion-panels flat dark>
    <v-expansion-panel style="background-color: #263238 !important">
      <v-expansion-panel-header>
        <v-row no-gutters>
          <v-col class="text-center">Data Sources</v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row justify="space-around">
          <v-col cols="6">
            <v-card flat color="blue-grey darken-4">
              <v-card-title>Map</v-card-title>
              <v-card-text>
                {{ population.title }}:
                <a href="population.link">{{ population.link }}</a>
              </v-card-text>
              <v-card-text>
                {{ ghg.title }}:
                <a href="ghg.link">{{ ghg.link }}</a>
              </v-card-text>
              <v-card-text>{{ coverage.title }}: {{ coverage.link }}</v-card-text>
              <v-card-text>
                Passenger volume:
                <v-row>
                  <v-col class="inline" v-for="(p, i) in passenger" :key="i" cols="12">
                    <a href="p">{{ p }}</a>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text>
                Green mobility:
                <v-row>
                  <v-col class="inline" v-for="(g, i) in green" :key="i" cols="12">
                    <a href="g">{{ g }}</a>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card flat color="blue-grey darken-4">
              <v-card-title>Images</v-card-title>
              <v-card-text v-for="({ title, link,l }, i) in images" :key="i">{{ title }}: {{ link }} <a href="l">{{ l }}</a></v-card-text>
            </v-card>
            <div class="py-2"></div>

            <v-divider></v-divider>
            <v-card flat color="blue-grey darken-4">
              <v-card-title>Charts</v-card-title>
              <v-card-text v-for="({ title, link }, i) in charts" :key="i">
                {{ title }}:
                <a href>{{ link }}</a>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
// Create expandable data sources with proper formats
export default {
  name: "Sources",
  data: () => ({
    population: {
      title: "Population",
      link: "https://ourworldindata.org/urbanization"
    },
    ghg: {
      title: "Green house gas",
      link: "https://sum4all.org/gra-tool/country-performance/indicator/729"
    },
    coverage: {
      title: "Coverage",
      link: "Open Street Map"
    },
    passenger: [
      "https://data.stadt-zuerich.ch/dataset/vbz_fahrplandaten_gtfs",
      "https://data.stadt-zuerich.ch/dataset/vbz_fahrgastzahlen_ogd",
      "https://www.mytransport.sg/content/dam/datamall/datasets/Geospatial/BusStopLocation.zip",
      "http://datamall2.mytransport.sg/ltaodataservice/PV/Bus",
      "https://www.translink.ca/tspr"
    ],
    green: [
      "https://data.stadt-zuerich.ch",
      "https://www.mytransport.sg",
      "https://data.gov.sg",
      "https://opendata.vancouver.ca",
      "https://www.lemnet.org/en/downloads",
      "https://openchargemap.org"
    ],
    images: [
            {
        title: "Landing page",
        link: "Photo by ben o'bro on Unsplash" 
      },
      {
        title: "Traffic Congestion",
        link: "Photo by Rebekah Blocker on Unsplash" 
      },
            {
        title: "Air Pollution",
        link: "Photo by Carolina Pimenta on Unsplash" 
      },
      { title: "Zurich", link: "Photo by Viespire Travel on Unsplash" },
      {
        title: "Singapore",
        link: "Photo by Coleen Rivas on Unsplash"
      },
      {
        title: "Vancouver",
        link: "Photo by Brayden Law on Unsplash"
      },
      {
        title: "Green Map tree Icons",
        link: "Designed by Freepik" ,
        l: "http://www.freepik.com"
      }
    ],
    charts: [
      {
        title: "GDP",
        link: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD"
      },
      {
        title: "Demand for passenger transport",
        link: "http://dx.doi.org/10.1787/888933972012"
      },
      {
        title: "CO2 emission by sector",
        link:
          "https://www.iea.org/subscribe-to-data-services/co2-emissions-statistics"
      },
      {
        title: "Coverage",
        link:
          "http://reports.weforum.org/global-competitiveness-report-2018/downloads/"
      },
      {
        title: "Accessibility",
        link:
          "https://docs.google.com/spreadsheets/d/1uMuNG9rTGO52Vuuq6skyqmkH9U5yv1iSJDJYjH64MJM/edit#gid=1523036623"
      },
      {
        title: "Sustainability",
        link: "https://sum4all.org/gra-tool/country-performance/indicator/728"
      }
    ]
  })
};
</script>

<style scoped>
.v-card__text {
  padding-bottom: 5px;
}

.v-card__text .inline {
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>
