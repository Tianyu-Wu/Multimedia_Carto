// read data
// let data = d3.csv("../data/urban/world-urban-rural-stacked.csv");

// data.array.forEach(d => {
//     d.Year = Number(d.Year);
//     d.Urban = Number(d.Urban);
//     d.Rural = Number(d.Rural);
//     d.Total = d.Urban + d.Rural;
// });

// let data;
// d3.csv("../data/urban/world-urban-rural-stacked.csv").then((d) => {
//     // d.Year = Number(d.Year);
//     // d.Urban = Number(d.Urban);
//     // d.Rural = Number(d.Rural);

//     // d.Total = d.Urban + d.Rural;
//     console.log(d.length, d);

// }).catch((err) => {

// });;
// console.log(data);

async function createStack() {
    // read data
    const data = await d3.csv("../data/urban/world-urban-rural-stacked.csv");
    console.log(data);

    data.forEach(d => {
        d = d3.autoType(d);
        d.Total = d.Urban + d.Rural;
    });


    // stack series
    var series = d3.stack()
        .keys(data.columns.slice(2, 3))
        (data).map(d => (d.forEach(v => v.key = d.key), d));
    console.log(series);
}

createStack();
