
import { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css';

var map = new Map({
    container: 'map', // container id
    hash: true,
    style: 'https://beta-karttakuva.maanmittauslaitos.fi/kipa/WGS84_Pseudo-Mercator/kipa_kiinteistojaotus_simple_v1.json'
});
    
