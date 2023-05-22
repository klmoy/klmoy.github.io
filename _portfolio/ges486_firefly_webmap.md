---
title: "Advanced GIS - QGIS 2 WebMap"
excerpt: "A basic web map generated using the qgis2web plug-in<br/><img src='/portfolio/images/photinusPyralis_vs_photinusCorrusca.JPG'>"
collection: portfolio
---

<p>Using the <a href='https://www.gbif.org/what-is-gbif' target='_blank'>GBIF</a> Occurences Plug-in for QGIS, I queried on all <a href='https://inaturalist.org' target='_blank'>iNaturalist</a>, 
research-grade firefly(genus <i>Photinus</i>) observations in the United States.
The observations were converted from a shapefile to a GeoJSON.<br>
Each species was queried by specific epithet. I chose to use two species to highlight the capabilities of the qgis2web plug-in;
<i>Photinus pyralis</i>, also known as the Common Eastern Firefly, and <i>Photinus corrusca</i> (or <i>Ellychnia corrusca</i>), also known as the Winter Firefly.
These two species were observed far more frequently than any others in the United States.</p>
<br>
<iframe src='/portfolio/qgis2web_2023_05_19-23_51_50_648594/index.html' height="500" width="1000"></iframe>

<p>Their distributions are shown in purple (<i>P. pyralis</i>) and orange (<i>P. corrusca</i>) against the CartoDB Dark Matter basemap for emphasis.</p>

<p><strong>Limitations of the qgis2web plug-in:</strong><br><br>
One major limitation of the plug-in is the inability to render multiple symbology categories within a single layer. You can read more about this limitation
<a href='https://github.com/tomchadwin/qgis2web/issues/821' target='_blank'>here</a>
This is why I created copies of the firefly observations point layer and queried upon each species, creating separate layers for each.</p>

