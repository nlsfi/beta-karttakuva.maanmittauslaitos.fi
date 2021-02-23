import XYZ from 'ol/source/XYZ';
import TileLayer from 'ol/layer/Tile';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import styleFunction from 'ol-mapbox-style/dist/stylefunction';
import MLVT from './error_safe_mvt';

function getFont(font) {
    return 'sans-serif';
}

export default function vectorLayers(projection, tileGrid, resolutions, styleJson, mins, maxs, donTdeclutter) {

    const sources = {
    };

    for (const [key, value] of Object.entries(styleJson.sources)) {
        if (sources[key]) {
            continue;
        }
        switch (value.type) {
            case 'vector':
                sources[key] = new VectorTileSource({
                    projection: projection,
                    tileGrid: tileGrid,
                    format: new MLVT(),
                    minZoom: mins[key] || 1,
                    maxZoom: maxs[key] || 15,
                    url: value.tiles[0]
                });
                break;
            case 'raster':
                sources[key] = new XYZ({
                    projection: projection,
                    tileGrid: tileGrid,
                    requestEncoding: 'REST',
                    urls: value.tiles
                });
                break;
        }
    }

    const
        layers = [],
        buckets = [];
    let currentSource;
    let styleSources = styleJson.sources;
    styleJson.layers.forEach(layer => {
        if (!layer.source) {
            return;
        }
        if (!styleSources[layer.source]) {
            return;
        }


        if (currentSource !== layer.source) {
            currentSource = layer.source;
            buckets.push({
                source: layer.source,
                type: styleSources[layer.source].type,
                layers: []
            });
        }
        buckets[buckets.length - 1].layers.push(layer.id);
    });

    buckets.forEach(bucket => {
        const source = sources[bucket.source];
        if (!source) {
            return;
        }
        switch (bucket.type) {
            case 'vector': {
                const layer = new VectorTileLayer({
                    declutter: !donTdeclutter,
                    source: source,
                    tileGrid: tileGrid,
                    projection: projection,
                    opacity: 1,
                    minZoom: mins[bucket.source] || 1,
                    maxZoom: maxs[bucket.source] || 15
                });
                styleFunction(layer, styleJson, bucket.layers, resolutions, null, null, getFont);
                layers.push(layer);
                break;
            }
            case 'raster': {
                const layer = new TileLayer({
                    source: sources[bucket.source]
                });
                layers.push(layer);
                break;
            }

        }


    });

    return layers;



}   
