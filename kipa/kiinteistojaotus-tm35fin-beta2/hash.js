// @flow

import {bindAll} from './util';
import throttle from './throttle';

import Map from 'ol/Map';
import { get as getProjection, transform } from 'ol/proj';

/*
 * Universal ZOOM ...
 * Adds the map's position to its page's location hash.
 * Passed as an option to the map object.
 *
 * @returns {Hash} `this`
 */
class Hash {
    _map;
    _updateHash;
    _hashName;

    constructor(hashName) {
        this._hashName = hashName && encodeURIComponent(hashName);
        bindAll([
            '_getCurrentHash',
            '_onHashChange',
            '_updateHash'
        ], this);

        // Mobile Safari doesn't allow updating the hash more than 100 times per 30 seconds.
        this._updateHash = throttle(this._updateHashUnthrottled.bind(this), 30 * 1000 / 100);
    }

    /*
     * Map element to listen for coordinate changes
     *
     * @param {Object} map
     * @returns {Hash} `this`
     */
    addTo(map) {
        this._map = map;
        this._onHashChange();
        window.addEventListener('hashchange', this._onHashChange, false);
        this._map.on('moveend', this._updateHash);
        return this;
    }
    

    /*
     * Removes hash
     *
     * @returns {Popup} `this`
     */
    remove() {
        window.removeEventListener('hashchange', this._onHashChange, false);
        this._map.off('moveend', this._updateHash);
        clearTimeout(this._updateHash());

        delete this._map;
        return this;
    }

    getHashString(mapFeedback) {
        const _center = this._map.getView().getCenter(),
            center = transform(_center,this._map.getView().getProjection(),getProjection('EPSG:4326')),
            zoomOff = this._map.getView().getProjection().getCode()==='EPSG:3067' ? +3.0 : 0, 
            zoom = zoomOff+ Math.round(this._map.getView().getZoom() * 100) / 100,
            // derived from equation: 512px * 2^z / 360 / 10^d < 0.5px
            precision = Math.ceil((zoom * Math.LN2 + Math.log(512 / 360 / 0.5)) / Math.LN10),
            m = Math.pow(10, precision),
            lng = Math.round(center[0] * m) / m,
            lat = Math.round(center[1] * m) / m,
            bearing = 0,//this._map.getBearing(),
            pitch = 0;//this._map.getPitch();
        let hash = '';
        if (mapFeedback) {
            // new map feedback site has some constraints that don't allow
            // us to use the same hash format as we do for the Map hash option.
            hash += `/${lng}/${lat}/${zoom}`;
        } else {
            hash += `${zoom}/${lat}/${lng}`;
        }

        if (bearing || pitch) hash += (`/${Math.round(bearing * 10) / 10}`);
        if (pitch) hash += (`/${Math.round(pitch)}`);

        if (this._hashName) {
            const hashName = this._hashName;
            let found = false;
            const parts = window.location.hash.slice(1).split('&').map(part => {
                const key = part.split('=')[0];
                if (key === hashName) {
                    found = true;
                    return `${key}=${hash}`;
                }
                return part;
            }).filter(a => a);
            if (!found) {
                parts.push(`${hashName}=${hash}`);
            }
            return `#${parts.join('&')}`;
        }

        return `#${hash}`;
    }

    _getCurrentHash() {
        // Get the current hash from location, stripped from its number sign
        const hash = window.location.hash.replace('#', '');
        if (this._hashName) {
            // Split the parameter-styled hash into parts and find the value we need
            let keyval;
            hash.split('&').map(
                part => part.split('=')
            ).forEach(part => {
                if (part[0] === this._hashName) {
                    keyval = part;
                }
            });
            return (keyval ? keyval[1] || '' : '').split('/');
        }
        return hash.split('/');
    }

    _onHashChange() {
        const loc = this._getCurrentHash();
        if (loc.length >= 3 && !loc.some(v => isNaN(v))) {
            const bearing = 0,
                 center = transform([loc[2],loc[1]],'EPSG:4326',this._map.getView().getProjection());
            this._map.getView().setCenter( center );

            let zoomOff = this._map.getView().getProjection().getCode()==='EPSG:3067' ? -3.0 : 0,             
                hashZoom = parseFloat(loc[0]),
                zoom = zoomOff+hashZoom;
            this._map.getView().setZoom(zoom)
            /*,
                bearing,
                pitch: +(loc[4] || 0)
            });*/
            return true;
        }
        return false;
    }

    _updateHashUnthrottled() {
        // Replace if already present, else append the updated hash string
        const hash = this.getHashString();
        const location = window.location.href.replace(/(#.+)?$/, hash);
        try {
            window.history.replaceState(window.history.state, null, location);
        } catch (SecurityError) {
            // IE11 does not allow this if the page is within an iframe created
            // with iframe.contentWindow.document.write(...).
            // https://github.com/mapbox/mapbox-gl-js/issues/7410
        }
    }

}

export default Hash;