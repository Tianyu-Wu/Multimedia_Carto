<template>
    <v-card flat style="padding: 0px 50px 0px 50px">
        <v-row no-gutters justify="center" class="align-center">
        <v-col cols="12" lg="4">
            <v-card-text class="display-2">Driving force 2: Increasing GDP worldwide</v-card-text>
            <v-card-text class="subtitle-1">
            From 1960s, the world's GDP has grown steadily from 1.37 Trillion US
            Dollar to nearly 86 Trillion US Dollar.
            <br />
            <br />The economic growth worldwide plays an essential role for the
            soaring demand for transportation not just regionally but
            internationally.
            <div class="py-5"></div>
            </v-card-text>
        </v-col>
        <v-col cols="12" lg="8">
            <bar-chart v-if="loaded" :chartdata="datacollection" :options="options"/>
        </v-col>
        </v-row>
    </v-card>
    
</template>

<script>
import BarChart from '../scripts/BarChart'
import jsondata from '../data/three_aspect_scaled.json'

export default {
    name: "TestChart",
    components: {
        BarChart
    },
    data() {
        return {
            datacollection: null,
            options: null,
            loaded: false,
            colors: ["#2196F3", "#FFC107", "#4CAF50"]
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            // convert json to data object
            // console.log(jsondata.map(el => ({"x": el.Year, "y": el["GDP (Trillion US Dollar)"]})));
            console.log(jsondata[0])
            var columns = Object.keys(jsondata[0]);
            // const datasets = columns.map(col => ({label: col, data: jsondata.map(el => el[col]), fill: false}));
            columns.shift()
            // console.log(datasets);
            
            this.datacollection = {
                labels: jsondata.map(el => el.COUNTRY),
                datasets: columns.map((col, index) => ({
                        label: col, 
                        data: jsondata.map(el => el[col]), 
                        backgroundColor: this.colors[index % this.colors.length], 
                        borderColor: 'white',
                        borderWidth: 1
                    }))
            };

            console.log(this.datacollection.datasets);

            this.options = {
                responsive: true,
                title: {
                        display: true,
                        text: 'Sustainable mobility score',
                        fontColor: 'black'
                },
                legend: {
                    display: false, 
                },
                scales: {
                    yAxes: [{
                        stacked: true
                    }],
                    xAxes: [{
                        stacked: true
                    }]
                },
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 80,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
            };
            this.loaded = true;
            // console.log(this.datacollection);
            // console.log(this)

        }
    },


}
</script>