 import 'ol/ol.css';
import FullScreen from 'ol/control/FullScreen';
import apply from 'ol-mapbox-style';
import Map from 'ol/Map';

const styleUrl = `https://beta-karttakuva.maanmittauslaitos.fi/kipa/WGS84_Pseudo-Mercator/kipa_kiinteistojaotus_simple_v1.json`,
  map = new Map({ target: 'map' });
apply(map, styleUrl);
