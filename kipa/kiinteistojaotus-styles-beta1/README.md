# kiinteistojaotus-styles-beta1

National Land Survey of Finland has created symbology for vector tile services of cadastre data. Styles follow the <a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/" target="_blank">MapBox GL JS Style Specification.</a> Vector tile service and styles for cadastre are running on the BETA-status at this moment, therefor they should not use for productional purposes.

Some of the vector tile services and basemap services require API-Key in order to work. Instructions how to acquire and use API-Key can be found <a href="https://www.maanmittauslaitos.fi/en/rajapinnat/api-avaimen-ohje" target="_blank">here.</a>

Vector tiles demos and examples for cadastre in this GitHub repository has been developed using <a href="https://openlayers.org/" target="_blank">OpenLayers</a> or <a href="https://github.com/maplibre/maplibre-gl-js" target="_blank">maplibre-gl-js</a>, the open source fork of MapBox GL JS.

National Land Survey of Finland offers files where predifined styles and links to the tile sources are ready to use. This very simple example below shows how to add predefined style to the webmap. 

``` javascript
import { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css';

var map = new Map({
    container: 'map', // container id (index.html)
    hash: true,
    style: 'https://beta-karttakuva.maanmittauslaitos.fi/kipa/kiinteistojaotus_style_beta1/cadastral_wmts_topographic.json'
});
```
There are four style files for cadastre vector tile service available. Usability with different kinds of basemaps is the reason for multiple styles for cadastre service. One basemap layer and eight cadastre layers are specified in these configuration files.

<ul>
<li>https://beta-karttakuva.maanmittauslaitos.fi/kipa/kiinteistojaotus_style_beta1/cadastral_orthophotos_infrared.json</li>
<li>https://beta-karttakuva.maanmittauslaitos.fi/kipa/kiinteistojaotus_style_beta1/cadastral_orthophotos.json</li>
<li>https://beta-karttakuva.maanmittauslaitos.fi/kipa/kiinteistojaotus_style_beta1/cadastral_vt_topographic.json</li>
<li>https://beta-karttakuva.maanmittauslaitos.fi/kipa/kiinteistojaotus_style_beta1/cadastral_wmts_topographic.json</li>
</ul>

ETRS-TM35FIN (EPSG:3067) is a default projection for vector tiles services, also WGS84_Pseudo-Mercator (EPSG:3857) can be used. Changes between these two projection can be made to the tile sources url of the service.

``` json
"kipa" : {
        "type" : "vector",
        "url" : "https://beta-karttakuva.maanmittauslaitos.fi/kiinteisto-avoin/tilejson/kiinteistojaotus/default/v2/ETRS-TM35FIN or WGS84_Pseudo-Mercator/tilejson.json" 
        }
```





more information at <https://beta-karttakuva.maanmittauslaitos.fi/>

Get Started
```
git clone https://github.com/nlsfi/beta-karttakuva.maanmittauslaitos.fi.git
cd beta-karttakuva.maanmittauslaitos.fi/kipa/kiinteistojaotus-styles-beta1
npm install
npm start
# go to http://localhost:1234

```
