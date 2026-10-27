var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_buildings_2 = new ol.format.GeoJSON();
var features_buildings_2 = format_buildings_2.readFeatures(json_buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_2.addFeatures(features_buildings_2);
var lyr_buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_2, 
                style: style_buildings_2,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_2.png" /> buildings'
            });
var format_Railway_3 = new ol.format.GeoJSON();
var features_Railway_3 = format_Railway_3.readFeatures(json_Railway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_3.addFeatures(features_Railway_3);
var lyr_Railway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_3, 
                style: style_Railway_3,
                popuplayertitle: 'Railway',
                interactive: true,
                title: '<img src="styles/legend/Railway_3.png" /> Railway'
            });
var format_Roads_4 = new ol.format.GeoJSON();
var features_Roads_4 = format_Roads_4.readFeatures(json_Roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_4.addFeatures(features_Roads_4);
var lyr_Roads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_4, 
                style: style_Roads_4,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_4.png" /> Roads'
            });
var format_Stream_ydg_5 = new ol.format.GeoJSON();
var features_Stream_ydg_5 = format_Stream_ydg_5.readFeatures(json_Stream_ydg_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stream_ydg_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stream_ydg_5.addFeatures(features_Stream_ydg_5);
var lyr_Stream_ydg_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stream_ydg_5, 
                style: style_Stream_ydg_5,
                popuplayertitle: 'Stream_ydg',
                interactive: true,
                title: '<img src="styles/legend/Stream_ydg_5.png" /> Stream_ydg'
            });
var format_Waterbodies_1_6 = new ol.format.GeoJSON();
var features_Waterbodies_1_6 = format_Waterbodies_1_6.readFeatures(json_Waterbodies_1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbodies_1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_1_6.addFeatures(features_Waterbodies_1_6);
var lyr_Waterbodies_1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_1_6, 
                style: style_Waterbodies_1_6,
                popuplayertitle: 'Waterbodies_1',
                interactive: true,
                title: '<img src="styles/legend/Waterbodies_1_6.png" /> Waterbodies_1'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_buildings_2.setVisible(true);lyr_Railway_3.setVisible(true);lyr_Roads_4.setVisible(true);lyr_Stream_ydg_5.setVisible(true);lyr_Waterbodies_1_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_buildings_2,lyr_Railway_3,lyr_Roads_4,lyr_Stream_ydg_5,lyr_Waterbodies_1_6];
lyr_buildings_2.set('fieldAliases', {'boundary_i': 'boundary_i', 'bf_source': 'bf_source', 'confidence': 'confidence', 'area_in_me': 'area_in_me', 's2_id': 's2_id', 'country_is': 'country_is', 'geohash': 'geohash', 'country': 'country', });
lyr_Railway_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_Roads_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_Stream_ydg_5.set('fieldAliases', {'HYRIV_ID': 'HYRIV_ID', 'NEXT_DOWN': 'NEXT_DOWN', 'MAIN_RIV': 'MAIN_RIV', 'LENGTH_KM': 'LENGTH_KM', 'DIST_DN_KM': 'DIST_DN_KM', 'DIST_UP_KM': 'DIST_UP_KM', 'CATCH_SKM': 'CATCH_SKM', 'UPLAND_SKM': 'UPLAND_SKM', 'ENDORHEIC': 'ENDORHEIC', 'DIS_AV_CMS': 'DIS_AV_CMS', 'ORD_STRA': 'ORD_STRA', 'ORD_CLAS': 'ORD_CLAS', 'ORD_FLOW': 'ORD_FLOW', 'HYBAS_L12': 'HYBAS_L12', });
lyr_Waterbodies_1_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_buildings_2.set('fieldImages', {'boundary_i': '', 'bf_source': '', 'confidence': '', 'area_in_me': '', 's2_id': '', 'country_is': '', 'geohash': '', 'country': '', });
lyr_Railway_3.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', 'Shape_Leng': '', });
lyr_Roads_4.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', 'Shape_Leng': '', });
lyr_Stream_ydg_5.set('fieldImages', {'HYRIV_ID': '', 'NEXT_DOWN': '', 'MAIN_RIV': '', 'LENGTH_KM': '', 'DIST_DN_KM': '', 'DIST_UP_KM': '', 'CATCH_SKM': '', 'UPLAND_SKM': '', 'ENDORHEIC': '', 'DIS_AV_CMS': '', 'ORD_STRA': '', 'ORD_CLAS': '', 'ORD_FLOW': '', 'HYBAS_L12': '', });
lyr_Waterbodies_1_6.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_buildings_2.set('fieldLabels', {'boundary_i': 'inline label - always visible', 'bf_source': 'inline label - always visible', 'confidence': 'inline label - always visible', 'area_in_me': 'inline label - always visible', 's2_id': 'inline label - always visible', 'country_is': 'inline label - always visible', 'geohash': 'inline label - always visible', 'country': 'inline label - always visible', });
lyr_Railway_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'layer': 'inline label - always visible', 'bridge': 'inline label - always visible', 'tunnel': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_Roads_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'ref': 'inline label - always visible', 'oneway': 'inline label - always visible', 'maxspeed': 'inline label - always visible', 'layer': 'inline label - always visible', 'bridge': 'inline label - always visible', 'tunnel': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_Stream_ydg_5.set('fieldLabels', {'HYRIV_ID': 'inline label - always visible', 'NEXT_DOWN': 'inline label - always visible', 'MAIN_RIV': 'inline label - always visible', 'LENGTH_KM': 'inline label - always visible', 'DIST_DN_KM': 'inline label - always visible', 'DIST_UP_KM': 'inline label - always visible', 'CATCH_SKM': 'header label - always visible', 'UPLAND_SKM': 'inline label - always visible', 'ENDORHEIC': 'inline label - always visible', 'DIS_AV_CMS': 'inline label - always visible', 'ORD_STRA': 'inline label - always visible', 'ORD_CLAS': 'inline label - always visible', 'ORD_FLOW': 'inline label - always visible', 'HYBAS_L12': 'inline label - always visible', });
lyr_Waterbodies_1_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Waterbodies_1_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});