
import { Map } from 'maplibre-gl'
//import 'maplibre-gl.css';

var map = new Map({
    container: 'map', // container id
    hash: true,
    style: 'https://beta-karttakuva.maanmittauslaitos.fi/kipa/WGS84_Pseudo-Mercator/v2/kipa_kiinteistojaotus_maplibre_v2.json'
});
    