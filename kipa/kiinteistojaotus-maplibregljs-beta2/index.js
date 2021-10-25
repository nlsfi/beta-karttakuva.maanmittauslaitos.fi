
import { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new Map({
    container: 'map', hash: true,
    style: 'https://beta-karttakuva.maanmittauslaitos.fi/kipa/WGS84_Pseudo-Mercator/v2/kipa_kiinteistojaotus_simple_maplibre_v2.json'
});
    