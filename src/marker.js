const mapboxgl = require("mapbox-gl");

const markerDomEl = document.createElement('div');
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";

const buildMarker = (type, coordinate) => {


    if (type === 'hotel') {
        markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';

    } else if (type === 'activity') {
        markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
    } else {
        markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
    }
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinate);
}

module.exports = buildMarker
