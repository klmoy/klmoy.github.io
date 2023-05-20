
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "CartoDark_0": {
            "type": "raster",
            "tiles": ["https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "photinuscorrusca_1": {
            "type": "geojson",
            "data": json_photinuscorrusca_1
        }
                    ,
        "photinuspyralis_2": {
            "type": "geojson",
            "data": json_photinuspyralis_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_CartoDark_0_0",
            "type": "raster",
            "source": "CartoDark_0"
        },
        {
            "id": "lyr_photinuscorrusca_1_0",
            "type": "circle",
            "source": "photinuscorrusca_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 3.571428571428571, 2], 'circle-color': '#edbb26', 'circle-opacity': 1.0, 'circle-stroke-width': 0, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_photinuspyralis_2_0",
            "type": "circle",
            "source": "photinuspyralis_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 3.571428571428571, 2], 'circle-color': '#a426ed', 'circle-opacity': 1.0, 'circle-stroke-width': 0, 'circle-stroke-color': '#232323'}
        }
],
}