const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiaWJyaXQiLCJhIjoiY2ptaTR6N2Z4MDFidDNwb2NnZHlpdDB2aiJ9.JCo70J33QQo08nuYucmFzQ';


const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const hotelMarker = buildMarker('hotel', [-87.6211705, 41.8860294])
hotelMarker.addTo(map)

