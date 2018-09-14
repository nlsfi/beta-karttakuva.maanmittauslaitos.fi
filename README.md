# beta-karttakuva.maanmittauslaitos.fi

This repository contains source code for demos available at https://beta-karttakuva.maanmittauslaitos.fi

## National Land Survey of Finland Background Map as Vector Tiles
Proof-of-Concept vector tile map covering Finland. This is a summer-of-code project by @Postilaatikko.

JSON map specification available at https://beta-karttakuva.maanmittauslaitos.fi/vtbasemaps/data/NLSbasemapWithRaster.json
Source code for the mapbox demo pages (frontpage, mbMap.html) are being prepared for github release.

These demos are up-to-date js projects with npm, webpack build etc.

## Vector Tile Demos ##
The demos are example mash ups to visualise the vector tiles. 
No build system is required as the demos do not use most recent JS language constructs.
Any js libraries load from various cdn providers.

## Vector Tile Service ##
The vector tiles service used is targeted only for development and proof-of-concept use.

## Vector Tile Database ##

Note: The database for the vector tiles service is last updated on a October 2017 based on a modified snapshot of National Land Survey of Finland databases. The data model is simplified and generalised from production databases.

## WMTS service ##
The WMTS service used for background raster maps is property of National Land Survey of Finland
and is only used in demos as reference map content.


