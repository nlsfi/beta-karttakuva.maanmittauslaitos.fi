import 'ol/ol.css';
import Map from 'ol/Map';
import FullScreen from 'ol/control/FullScreen';
import proj4 from 'proj4';
import { get as getProjection, getTransform } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import TileGrid from 'ol/tilegrid/TileGrid';
import View from 'ol/View';
import Hash from './hash';
import vectorLayers from './vectorlayers';



proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
proj4.defs("EPSG:3067", "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
register(proj4);


const
    tileMatrixSet = 'ETRS-TM35FIN',
    epsg = 'EPSG:3067', maxZoom = 15, extent =
        [-548576, 6291456, 1548576, 8388608],
    center = [384920, 6671856],
    projection = getProjection(epsg),
    resolutions = [8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5],
    tileGrid = new TileGrid({
        extent: extent,
        resolutions: resolutions,
        tileSize: [256, 256]
    }),
    mins = {
        'kipa': 9
    },
    maxs = {
        'kipa': 15
    },
    donTdeclutter = false;

projection.setExtent(extent);

const styleUrl = `https://beta-karttakuva.maanmittauslaitos.fi/kipa/${tileMatrixSet}/v2/kipa_kiinteistojaotus_raster_v2.json`


const hash = new Hash(),
    map = new Map({
        target: 'map',
        view: new View({
            projection: projection,
            resolutions: resolutions,
            center: center,
            zoom: 12,
            maxZoom: maxZoom,
            minZoom: 1
        })
    });
hash.addTo(map);
map.addControl(new FullScreen());
fetch(styleUrl).then(r => r.json()).then(styleJson => {
    const layers = vectorLayers(projection, tileGrid, resolutions, styleJson, mins, maxs, donTdeclutter)
    layers.forEach(l => {
        map.addLayer(l);
    })
});

