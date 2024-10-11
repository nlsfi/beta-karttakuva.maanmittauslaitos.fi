import { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css';

/* map style and version selections */
/* v20 is current published in 2020 */
/* v21 available in 2021 */
/* versioned styleUrl refers to Style document with a link to versioned TileJson document which has links to the Vector Tiles */
const tileVer = 'v21', styleVer = 'v21',
  styleName = 'hobby',//'taustakartta',
  tileMatrixSet = 'WGS84_Pseudo-Mercator',
  /* get your own api key at maanmittauslaitos.fi <<https://www.maanmittauslaitos.fi/rajapinnat/api-avaimen-ohje>> */
  apiKey = '<INSERTY-YOUR-API-KEY>',
  styleUrl = `https://avoin-karttakuva.maanmittauslaitos.fi/vectortiles/stylejson/${styleVer}/${styleName}.json?TileMatrixSet=${tileMatrixSet}&api-key=${apiKey}`;

var map = new Map({
    container: 'map', // container id
    hash: true,
    style: styleUrl,
    center: [24.937048, 60.198872], // starting position [lng, lat]
    zoom: 15.29, // starting zoom
});
    
