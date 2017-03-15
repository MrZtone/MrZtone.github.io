//Load map

mapboxgl.accessToken = 'pk.eyJ1IjoiamFza2E3MjQiLCJhIjoiY2l6Z3JucDF2MDAxZTMzdGY5ZDY1dTdpcSJ9.ke-er3jChidKw_FqDcFK7Q';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jaska724/cizxw3qje008l2ro4hjz42as6', //stylesheet location
    center: [0, 50], // starting position
    zoom: 1 // starting zoom
});

var coordinates_neg = [
    [[-77.03238901390978, 38.913188059745586],
    [30.03238901390978, 38.913188059745586]]
];
var coordinates_pos = [
    [[-7.03238901390978, 3.913188059745586],
        [10.03238901390978, 30.913188059745586]]
];


map.on('load', function () {
    map.addLayer({
        "id": "points",
        "type": "circle",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": coordinates_neg
                    }
                }]
            }
        },
        "paint": {
            "circle-color": "#ff0000",
            "circle-opacity": 0.5

        }
    });
    map.addLayer({
        "id": "points2",
        "type": "circle",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": coordinates_pos
                    }
                }]
            }
        },
        "paint": {
            "circle-color": "#000000",
            "circle-opacity": 0.5,
            "circle-blur": 0.5

        }
    });
});
