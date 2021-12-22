var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_yes_1 = new ol.format.GeoJSON();
var features_building_yes_1 = format_building_yes_1.readFeatures(json_building_yes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_1.addFeatures(features_building_yes_1);
var lyr_building_yes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_yes_1, 
                style: style_building_yes_1,
                interactive: true,
                title: '<img src="styles/legend/building_yes_1.png" /> building_yes'
            });
var format_Semarang_Building_2 = new ol.format.GeoJSON();
var features_Semarang_Building_2 = format_Semarang_Building_2.readFeatures(json_Semarang_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semarang_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Semarang_Building_2.addFeatures(features_Semarang_Building_2);
var lyr_Semarang_Building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semarang_Building_2, 
                style: style_Semarang_Building_2,
                interactive: true,
                title: '<img src="styles/legend/Semarang_Building_2.png" /> Semarang_Building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_yes_1.setVisible(true);lyr_Semarang_Building_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_yes_1,lyr_Semarang_Building_2];
lyr_building_yes_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'addr:city': 'addr:city', 'addr:full': 'addr:full', 'amenity': 'amenity', 'access:roof': 'access:roof', 'backup_generator': 'backup_generator', 'building:condition': 'building:condition', 'building:floor': 'building:floor', 'building:levels': 'building:levels', 'building:material': 'building:material', 'building:roof': 'building:roof', 'building:structure': 'building:structure', 'capacity:persons': 'capacity:persons', 'name': 'name', });
lyr_Semarang_Building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'addr_city': 'addr_city', 'addr_full': 'addr_full', 'amenity': 'amenity', 'access_roo': 'access_roo', 'backup_gen': 'backup_gen', 'building_c': 'building_c', 'building_f': 'building_f', 'building_l': 'building_l', 'building_m': 'building_m', 'building_r': 'building_r', 'building_s': 'building_s', 'capacity_p': 'capacity_p', 'name': 'name', });
lyr_building_yes_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'type': '', 'addr:city': '', 'addr:full': '', 'amenity': '', 'access:roof': '', 'backup_generator': '', 'building:condition': '', 'building:floor': '', 'building:levels': '', 'building:material': '', 'building:roof': '', 'building:structure': '', 'capacity:persons': '', 'name': '', });
lyr_Semarang_Building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'type': '', 'addr_city': '', 'addr_full': '', 'amenity': '', 'access_roo': '', 'backup_gen': '', 'building_c': '', 'building_f': '', 'building_l': '', 'building_m': '', 'building_r': '', 'building_s': '', 'capacity_p': '', 'name': '', });
lyr_building_yes_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'addr:city': 'no label', 'addr:full': 'no label', 'amenity': 'no label', 'access:roof': 'no label', 'backup_generator': 'no label', 'building:condition': 'no label', 'building:floor': 'no label', 'building:levels': 'no label', 'building:material': 'no label', 'building:roof': 'no label', 'building:structure': 'no label', 'capacity:persons': 'no label', 'name': 'no label', });
lyr_Semarang_Building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'addr_city': 'no label', 'addr_full': 'no label', 'amenity': 'no label', 'access_roo': 'no label', 'backup_gen': 'no label', 'building_c': 'no label', 'building_f': 'no label', 'building_l': 'no label', 'building_m': 'no label', 'building_r': 'no label', 'building_s': 'no label', 'capacity_p': 'no label', 'name': 'no label', });
lyr_Semarang_Building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});