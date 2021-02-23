import 'ol/ol.css';
import FullScreen from 'ol/control/FullScreen';
import apply from 'ol-mapbox-style';
import Map from 'ol/Map';

const styleUrl = `https://beta-karttakuva.maanmittauslaitos.fi/kipa/WGS84_Pseudo-Mercator/kipa_kiinteistojaotus_simple_v1.json`;

const map = new Map({ target: 'map' });

fetch(styleUrl).then(r => r.json()).then(styleJson => {
  apply(
    map, styleJson).then(function (map) {
      map.addControl(new FullScreen());
    });
});