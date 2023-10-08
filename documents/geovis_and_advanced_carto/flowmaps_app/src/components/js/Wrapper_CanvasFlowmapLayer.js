import L from 'leaflet'
import Papa from 'papaparse'
import "./LeafletCanvasFlowmapLayer/CanvasFlowmapLayer"

export class Wrapper_CanvasFlowmapLayer {

    constructor(window) {
        // window.L.CanvasFlowmapLayer = factory(L);
        window.L.canvasFlowmapLayer = function (originAndDestinationGeoJsonPoints, opts) {
            return new window.L.CanvasFlowmapLayer(originAndDestinationGeoJsonPoints, opts);
        };
        this.window = window;
        this.canvasRenderer = L.canvas()
        this.props = {
            // this is only a default option example,
            // developers will most likely need to provide this
            // options object with values unique to their data
            originAndDestinationFieldIds: {
                originUniqueIdField: 'origin_id',
                    originGeometry: {
                    x: 'origin_lon',
                        y: 'origin_lat'
                },
                destinationUniqueIdField: 'destination_id',
                    destinationGeometry: {
                    x: 'destination_lon',
                        y: 'destination_lat'
                }
            },

            canvasBezierStyle: {
                type: 'simple',
                    symbol: {
                    // use canvas styling options (compare to CircleMarker styling below)
                    strokeStyle: 'rgba(255, 0, 51, 0.8)',
                        lineWidth: 0.75,
                        lineCap: 'round',
                        shadowColor: 'rgb(255, 0, 51)',
                        shadowBlur: 1.5
                }
            },

            animatedCanvasBezierStyle: {
                type: 'simple',
                    symbol: {
                    // use canvas styling options (compare to CircleMarker styling below)
                    strokeStyle: 'rgb(255, 46, 88)',
                        lineWidth: 1.25,
                        lineDashOffsetSize: 4, // custom property used with animation sprite sizes
                        lineCap: 'round',
                        shadowColor: 'rgb(255, 0, 51)',
                        shadowBlur: 2
                }
            },

            // valid values: 'selection' or 'all'
            // use 'all' to display all Bezier paths immediately
            // use 'selection' if Bezier paths will be drawn with user interactions
            pathDisplayMode: 'all',

                wrapAroundCanvas: true,

                animationStarted: false,

                animationEasingFamily: 'Cubic',

                animationEasingType: 'In',

                animationDuration: 2000,

                pointToLayer: function(geoJsonPoint, latlng) {
                return L.circleMarker(latlng);
            },

            style: function(geoJsonFeature) {
                // use leaflet's path styling options

                // since the GeoJSON feature properties are modified by the layer,
                // developers can rely on the "isOrigin" property to set different
                // symbols for origin vs destination CircleMarker stylings

                if (geoJsonFeature.properties.isOrigin) {
                    return {
                        renderer: this.canvasRenderer, // recommended to use L.canvas()
                        radius: 5,
                        weight: 1,
                        color: 'rgb(195, 255, 62)',
                        fillColor: 'rgba(195, 255, 62, 0.6)',
                        fillOpacity: 0.6
                    };
                } else {
                    return {
                        renderer: this.canvasRenderer,
                        radius: 2.5,
                        weight: 0.25,
                        color: 'rgb(17, 142, 170)',
                        fillColor: 'rgb(17, 142, 170)',
                        fillOpacity: 0.7
                    };
                }
            }
        };
    }

    async parseCSV(csv) {
        // console.log("parseCSV");
        let geoJsonFeatureCollection = null;
        Papa.parse(csv, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: function (results) {
                geoJsonFeatureCollection = {
                    type: 'FeatureCollection',
                    features: results.data.map(function (datum) {
                        return {
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [datum.s_lon, datum.s_lat]
                            },
                            properties: datum
                        }
                    })
                }
            }
        });
        return geoJsonFeatureCollection
    }

    createCanvasFlowMapLayer (geoJsonFeatureCollection, props) {
        let options = props === null || props === undefined ? this.props : props;
        console.log("createCanvasFlowMapLayer");
        console.log(options);
        console.log(geoJsonFeatureCollection);
        let g = geoJsonFeatureCollection;
        console.log(g);
        this.window.L.canvasFlowmapLayer(g, options).then(value => { return value })
        return flowMapLayer;
    }
}
