ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32736").setExtent([574120.371074, 8456042.620560, 586724.604395, 8496038.810000]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BOUNDARY_1 = new ol.format.GeoJSON();
var features_BOUNDARY_1 = format_BOUNDARY_1.readFeatures(json_BOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_BOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_1.addFeatures(features_BOUNDARY_1);
var lyr_BOUNDARY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_1, 
                style: style_BOUNDARY_1,
                popuplayertitle: 'BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/BOUNDARY_1.png" /> BOUNDARY'
            });
var format_Roadreserve_2 = new ol.format.GeoJSON();
var features_Roadreserve_2 = format_Roadreserve_2.readFeatures(json_Roadreserve_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Roadreserve_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadreserve_2.addFeatures(features_Roadreserve_2);
var lyr_Roadreserve_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadreserve_2, 
                style: style_Roadreserve_2,
                popuplayertitle: 'Road reserve',
                interactive: false,
                title: '<img src="styles/legend/Roadreserve_2.png" /> Road reserve'
            });
var format_WEBPHOTO_3 = new ol.format.GeoJSON();
var features_WEBPHOTO_3 = format_WEBPHOTO_3.readFeatures(json_WEBPHOTO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_WEBPHOTO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WEBPHOTO_3.addFeatures(features_WEBPHOTO_3);
var lyr_WEBPHOTO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WEBPHOTO_3, 
                style: style_WEBPHOTO_3,
                popuplayertitle: 'WEB PHOTO',
                interactive: true,
    title: 'WEB PHOTO<br />\
    <img src="styles/legend/WEBPHOTO_3_0.png" /> Completed<br />\
    <img src="styles/legend/WEBPHOTO_3_1.png" /> Ongoing<br />\
    <img src="styles/legend/WEBPHOTO_3_2.png" /> Proposed<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_BOUNDARY_1.setVisible(true);lyr_Roadreserve_2.setVisible(true);lyr_WEBPHOTO_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_BOUNDARY_1,lyr_Roadreserve_2,lyr_WEBPHOTO_3];
lyr_BOUNDARY_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_Roadreserve_2.set('fieldAliases', {'id': 'id', });
lyr_WEBPHOTO_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Project': 'Project', 'Location': 'Location', 'Status': 'Status', 'Path-photo': 'Path-photo', });
lyr_BOUNDARY_1.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Roadreserve_2.set('fieldImages', {'id': 'TextEdit', });
lyr_WEBPHOTO_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Project': 'TextEdit', 'Location': 'TextEdit', 'Status': 'TextEdit', 'Path-photo': 'ExternalResource', });
lyr_BOUNDARY_1.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_Roadreserve_2.set('fieldLabels', {'id': 'no label', });
lyr_WEBPHOTO_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Project': 'header label - always visible', 'Location': 'inline label - visible with data', 'Status': 'inline label - always visible', 'Path-photo': 'inline label - always visible', });
lyr_WEBPHOTO_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});