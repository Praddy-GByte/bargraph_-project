
// Data for pH plot
var pHData = {
    x: ['Plate 47, Window 2', 'Plate 66, Window 3', 'Plate 99, Window 4', 'Plate 100, Window 18', 'Plate 122, Window 5', 'Plate 131, Window 6', 'Plate 134, Window 7', 'Plate 121, Window 8', 'Plate 91, Window 9', 'Plate 52, Window 10', 'Plate 21, Window 11', 'Plate 43, Window 12', 'Plate 69, Window 13', 'Plate 95, Window 14', 'Plate 96, Window 15', 'Plate 57, Window 16', 'Plate 55, Window 17', 'GDCL sample,VR-203', 'GDCL sample', 'Plate 11, Window 1', 'Plate 2, Leak 1', 'Plate 5, Leak 2', 'Plate 6, Leak 3'],
    y: [7.7, 7.5, 8.1, 7.7, 7.6, 6.6, 7.3, 7.6, 8.0, 7.7, 6.5, 7.5, 7.6, 7.8, 7.8, 7.8, 8.0, 6.6, 6.5, 7.0, 8.3, 8.0, 8.7],
    type: 'bar',
    name: 'pH'
};

// Data for Chloride plot
var chlorideData = {
    x: ['Plate 47, Window 2', 'Plate 66, Window 3', 'Plate 99, Window 4', 'Plate 100, Window 18', 'Plate 122, Window 5', 'Plate 131, Window 6', 'Plate 134, Window 7', 'Plate 121, Window 8', 'Plate 91, Window 9', 'Plate 52, Window 10', 'Plate 21, Window 11', 'Plate 43, Window 12', 'Plate 69, Window 13', 'Plate 95, Window 14', 'Plate 96, Window 15', 'Plate 57, Window 16', 'Plate 55, Window 17', 'GDCL sample,VR-203', 'GDCL sample', 'Plate 11, Window 1', 'Plate 2, Leak 1', 'Plate 5, Leak 2', 'Plate 6, Leak 3'],
    y: [969.0, 2113.0, 1225.0, 2810.0, 643.0, 1093.0, 1158.0, 1000.0, 362.0, 957.0, 1624.0, 1476.0, 321.0, 627.0, 2441.0, 2972.0, 841.0, 452.0, 335.0, 2931.0, 451.0, 653.0, 394.0],
    type: 'bar',
    name: 'Chloride'
};

// Data for Sulphate plot
var sulphateData = {
    x: ['Plate 47, Window 2', 'Plate 66, Window 3', 'Plate 99, Window 4', 'Plate 100, Window 18', 'Plate 122, Window 5', 'Plate 131, Window 6', 'Plate 134, Window 7', 'Plate 121, Window 8', 'Plate 91, Window 9', 'Plate 52, Window 10', 'Plate 21, Window 11', 'Plate 43, Window 12', 'Plate 69, Window 13', 'Plate 95, Window 14', 'Plate 96, Window 15', 'Plate 57, Window 16', 'Plate 55, Window 17', 'GDCL sample,VR-203', 'GDCL sample', 'Plate 11, Window 1', 'Plate 2, Leak 1', 'Plate 5, Leak 2', 'Plate 6, Leak 3'],
    y: [356.0, 238.0, 307.0, 448.0, 266.0, 142.0, 125.0, 231.0, 137.0, 220.0, 383.0, 181.0, 71.0, 201.0, 279.0, 353.0, 116.0, 55.0, 47.0, 605.0, 109.0, 503.0, 106.0],
    type: 'bar',
    name: 'Sulphate'
};

// Data for threshold lines
var thresholdPH = {
    x: ['Plate 47', 'Leak 3'],
    y: [8, 8],
    type: 'scatter',
    mode: 'lines',
    name: '',
    showlegend: false
};

var thresholdChloride = {
    x: ['Plate 47', 'Leak 3'],
    y: [600, 600],
    type: 'scatter',
    mode: 'lines',
    name: '',
    showlegend: false
};

var thresholdSulphate = {
    x: ['Plate 47', 'Leak 3'],
    y: [400, 400],
    type: 'scatter',
    mode: 'lines',
    name: '',
    showlegend: false
};
// Layout configuration
var layout = {
    barmode: 'group',
    title: 'Soil Analysis',
    legend: { orientation: 'v', x: 4, y: 1.1 }
};


// Combine data and threshold lines
var data = [pHData, chlorideData, sulphateData, thresholdPH, thresholdChloride, thresholdSulphate];


// Create the plots
Plotly.newPlot('pH-chart', [pHData, thresholdPH], layout);
Plotly.newPlot('chloride-chart', [chlorideData, thresholdChloride], layout);
Plotly.newPlot('sulphate-chart', [sulphateData, thresholdSulphate], layout);

